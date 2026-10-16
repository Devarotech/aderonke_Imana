import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from './portfolioData.ts';

test('portfolio profile data contains correct official name and email', () => {
  assert.equal(PORTFOLIO_DATA.profile.fullName, 'Yetunde Aderonke Imana');
  assert.equal(PORTFOLIO_DATA.profile.email, 'ronkeimana@gmail.com');
  assert.equal(PORTFOLIO_DATA.profile.title, 'Chief State Counsel / Prosecutor');
  assert.equal(PORTFOLIO_DATA.profile.department, 'Complex Casework Group');
});

test('navigation items have non-empty hrefs matching valid anchors', () => {
  assert.ok(PORTFOLIO_DATA.navigation.length >= 5);
  for (const item of PORTFOLIO_DATA.navigation) {
    assert.ok(item.label.length > 0);
    assert.match(item.href, /^#[a-z0-9_-]+$/);
  }
});

test('expertise section contains all 5 core competency areas', () => {
  assert.equal(PORTFOLIO_DATA.expertise.items.length, 5);
  const titles = PORTFOLIO_DATA.expertise.items.map((i) => i.title);
  assert.ok(titles.some(t => t.includes('Criminal Litigation')));
  assert.ok(titles.some(t => t.includes('Counterterrorism')));
  assert.ok(titles.some(t => t.includes('Gender-Based Violence')));
});

test('experience section lists all 7 professional responsibilities', () => {
  assert.equal(PORTFOLIO_DATA.experience.responsibilities.length, 7);
  const ids = PORTFOLIO_DATA.experience.responsibilities.map((r) => r.id);
  assert.deepEqual(ids, [1, 2, 3, 4, 5, 6, 7]);
});

test('contributions section lists verified highlights and mentions UNODC & ONSA correctly', () => {
  assert.equal(PORTFOLIO_DATA.contributions.highlights.length, 3);
  const recItem = PORTFOLIO_DATA.contributions.highlights.find((h) => h.id === 'con-3');
  assert.ok(recItem);
  assert.ok(recItem.description.includes('United Nations Office on Drugs and Crime (UNODC)'));
  assert.ok(recItem.description.includes("Office of the National Security Adviser (ONSA)"));
});

test('contact section has correct mailto URL pointing to ronkeimana@gmail.com', () => {
  assert.ok(PORTFOLIO_DATA.contact.mailtoLink.startsWith('mailto:ronkeimana@gmail.com'));
});

test('contact section contains verified LinkedIn, WhatsApp, and Instagram links', () => {
  const socials = PORTFOLIO_DATA.contact.socials;
  assert.equal(socials.length, 3);
  
  const linkedin = socials.find(s => s.name === 'LinkedIn');
  assert.ok(linkedin && linkedin.url.includes('aderonke-imana-011323179'));

  const whatsapp = socials.find(s => s.name === 'WhatsApp');
  assert.ok(whatsapp && whatsapp.url.includes('2348055817314'));

  const instagram = socials.find(s => s.name === 'Instagram');
  assert.ok(instagram && instagram.url.includes('aderonkeimana'));
});

test('engagements section contains verified institutional workshop items', () => {
  assert.ok(PORTFOLIO_DATA.engagements.items.length >= 4);
  const titles = PORTFOLIO_DATA.engagements.items.map(e => e.title);
  assert.ok(titles.some(t => t.includes('UNODC')));
  assert.ok(titles.some(t => t.includes('ONSA')));
  assert.ok(titles.some(t => t.includes('ACJA')));
});
