import { test } from 'node:test';
import * as assert from 'node:assert';
import { COMPANY, COMPANY_ADDRESS_LINES } from './company.ts';

test('COMPANY data exists and is properly structured', () => {
  assert.strictEqual(COMPANY.legalName, 'RIAL Energy GmbH');
  assert.strictEqual(COMPANY.brand, 'Aurevia');
  assert.strictEqual(COMPANY.city, 'Seesen');
});

test('COMPANY_ADDRESS_LINES returns formatted strings', () => {
  assert.strictEqual(COMPANY_ADDRESS_LINES[0], 'RIAL Energy GmbH');
  assert.strictEqual(COMPANY_ADDRESS_LINES[1], 'Lautenthaler Str. 11 A');
  assert.strictEqual(COMPANY_ADDRESS_LINES[2], 'D-38723 Seesen');
});
