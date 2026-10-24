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
    server = spawn('./node_modules/.bin/next', ['start', '-p', '3002']);
    let hasStarted = false;

    await new Promise((resolve, reject) => {
      server.stdout.on('data', (data) => {
        if (data.toString().includes('Ready') && !hasStarted) {
          hasStarted = true;
          resolve();
        }
      });
      server.on('error', reject);
      setTimeout(resolve, 3000); // safety fallback
    });

    const sitemapRes = await fetchUrl('http://localhost:3002/sitemap.xml');
    assert(sitemapRes.status === 200, 'sitemap should be 200');

    const robotsRes = await fetchUrl('http://localhost:3002/robots.txt');
    assert(robotsRes.status === 200, 'robots should be 200');

    const llmsRes = await fetchUrl('http://localhost:3002/llms.txt');
    assert(llmsRes.status === 200, 'llms should be 200');

    const seenMetadata = new Set();
    for (const route of expectedRoutes) {
      const res = await fetchUrl(`http://localhost:3002${route}`);
      assert(res.status === 200, `Route ${route} should return 200`);

      const html = res.data;
      assert(html.includes('<script type="application/ld+json"'), `Route ${route} should have JSON-LD`);

      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      assert(titleMatch, `Route ${route} should have a title`);

      const canonicalMatch = html.match(/<link rel="canonical" href="(.*?)"/);
      assert(canonicalMatch, `Route ${route} should have a canonical URL`);

      const ogTitleMatch = html.match(/<meta property="og:title" content="(.*?)"/);
      assert(ogTitleMatch, `Route ${route} should have og:title`);

      const metadataKey = `${titleMatch[1]}-${canonicalMatch[1]}`;
      if (seenMetadata.has(metadataKey)) {
          throw new Error(`Duplicate metadata found for key: ${metadataKey} on route ${route}`);
      }
      seenMetadata.add(metadataKey);
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
