import test from 'node:test';
import assert from 'node:assert/strict';
import { generateVCard } from './vcard.ts';

test('generateVCard produces valid vCard 3.0 string with correct contact details', () => {
  const vcf = generateVCard();
  assert.ok(vcf.includes('BEGIN:VCARD'));
  assert.ok(vcf.includes('VERSION:3.0'));
  assert.ok(vcf.includes('FN:Yetunde Aderonke Imana'));
  assert.ok(vcf.includes('TEL;TYPE=CELL,VOICE,PREF:+2348055817314'));
  assert.ok(vcf.includes('EMAIL;TYPE=INTERNET,PREF:ronkeimana@gmail.com'));
  assert.ok(vcf.includes('TITLE:Chief State Counsel / Prosecutor'));
  assert.ok(vcf.includes('END:VCARD'));
});
