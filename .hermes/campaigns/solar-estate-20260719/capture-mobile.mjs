import fs from 'node:fs';

const tabs = await (await fetch('http://127.0.0.1:9225/json')).json();
const tab = tabs.find((item) => item.type === 'page');
if (!tab) throw new Error('No Chrome page target found');

const ws = new WebSocket(tab.webSocketDebuggerUrl);
let nextId = 1;
const pending = new Map();

const call = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true });
  ws.addEventListener('error', reject, { once: true });
});

ws.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await call('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
  screenWidth: 390,
  screenHeight: 844,
});
await call('Page.enable');
await call('Page.reload', { ignoreCache: true });
await new Promise((resolve) => setTimeout(resolve, 4000));

const metrics = await call('Runtime.evaluate', {
  expression: `JSON.stringify({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    imageCount: document.images.length,
    loadedImages: Array.from(document.images).filter((image) => image.complete && image.naturalWidth > 0).length
  })`,
  returnByValue: true,
});

const screenshot = await call('Page.captureScreenshot', {
  format: 'png',
  captureBeyondViewport: false,
  fromSurface: true,
});

const output = '.hermes/campaigns/solar-estate-20260719/evidence/aurevia-mobile-390.png';
fs.writeFileSync(output, Buffer.from(screenshot.data, 'base64'));
console.log(`${metrics.result.value} output=${output}`);
ws.close();
