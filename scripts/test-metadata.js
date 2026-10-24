const fs = require('fs');
const http = require('http');
const assert = require('assert');
const { spawn } = require('child_process');

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

const expectedRoutes = [
  '/',
  '/atelier',
  '/shop',
  '/proof',
  '/agb',
  '/analyse',
  '/autarkie',
  '/datenschutz',
  '/herkunft',
  '/impressum',
  '/konzept',
  '/realisierung',
  '/referenzen',
  '/widerruf',
];

async function runTests() {
  let server;
  try {
    const nextBin = require.resolve('next/dist/bin/next');
    server = spawn(process.execPath, [nextBin, 'start', '-p', '0']);
    let hasStarted = false;
    let port = null;
    let isReady = false;

    await new Promise((resolve, reject) => {
      server.stdout.on('data', (data) => {
        const out = data.toString();
        const match = out.match(/http:\/\/localhost:(\d+)/);
        if (match) port = match[1];
        if (out.includes('Ready')) isReady = true;

        if (port && isReady && !hasStarted) {
          hasStarted = true;
          resolve();
        }
      });

      server.stderr.on('data', (data) => {
         console.error(data.toString());
      });

      server.on('error', reject);
      server.on('exit', (code) => {
        if (!hasStarted) {
          reject(new Error(`Server exited prematurely with code ${code}`));
        }
      });
    });

    if (!port) {
       throw new Error('Could not determine port from Next.js output');
    }

    const sitemapRes = await fetchUrl(`http://localhost:${port}/sitemap.xml`);
    assert(sitemapRes.status === 200, 'sitemap should be 200');

    const robotsRes = await fetchUrl(`http://localhost:${port}/robots.txt`);
    assert(robotsRes.status === 200, 'robots should be 200');

    const llmsRes = await fetchUrl(`http://localhost:${port}/llms.txt`);
    assert(llmsRes.status === 200, 'llms should be 200');

    const seenTitles = new Set();
    const seenCanonicals = new Set();
    const seenOgTitles = new Set();
    const seenOgDescriptions = new Set();

    for (const route of expectedRoutes) {
      const res = await fetchUrl(`http://localhost:${port}${route}`);
      assert(res.status === 200, `Route ${route} should return 200`);

      const html = res.data;
      assert(html.includes('<script type="application/ld+json"'), `Route ${route} should have JSON-LD`);

      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      assert(titleMatch, `Route ${route} should have a title`);
      const title = titleMatch[1];

      const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/);
      assert(canonicalMatch, `Route ${route} should have a canonical URL`);
      const canonical = canonicalMatch[1];

      const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
      assert(ogTitleMatch, `Route ${route} should have og:title`);
      const ogTitle = ogTitleMatch[1];

      const ogDescMatch = html.match(/<meta property="og:description" content="(.*?)"/);
      const ogDesc = ogDescMatch ? ogDescMatch[1] : null;

      if (seenTitles.has(title)) throw new Error(`Duplicate title found: ${title} on route ${route}`);
      seenTitles.add(title);

      if (seenCanonicals.has(canonical)) throw new Error(`Duplicate canonical found: ${canonical} on route ${route}`);
      seenCanonicals.add(canonical);

      if (seenOgTitles.has(ogTitle)) throw new Error(`Duplicate og:title found: ${ogTitle} on route ${route}`);
      seenOgTitles.add(ogTitle);

      if (ogDesc) {
          if (seenOgDescriptions.has(ogDesc)) {
              throw new Error(`Duplicate og:description found: ${ogDesc} on route ${route}`);
          }
          seenOgDescriptions.add(ogDesc);
      }
    }

    console.log('✅ Metadata enumeration test passed');
    server.kill();
    process.exit(0);
  } catch(e) {
    console.error(e);
    if(server) server.kill();
    process.exit(1);
  }
}
runTests();
