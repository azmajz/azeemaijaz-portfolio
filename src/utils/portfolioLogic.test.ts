import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  searchSkills,
  validateContactForm,
  formatMetricCounter,
} from './portfolioLogic.ts';
import { PORTFOLIO_DATA } from '../data/portfolioData.ts';

test('filterProjects handles category filtering', () => {
  const allProjects = PORTFOLIO_DATA.projects;
  assert.equal(allProjects.length >= 5, true);

  const saasProjects = filterProjects(allProjects, 'saas');
  assert.equal(saasProjects.every((p) => p.category === 'saas'), true);
  assert.equal(saasProjects.some((p) => p.id === 'ezchildtrack'), true);

  const ecommerceProjects = filterProjects(allProjects, 'ecommerce');
  assert.equal(ecommerceProjects.every((p) => p.category === 'ecommerce'), true);
  assert.equal(ecommerceProjects.some((p) => p.id === 'bullionstore-au'), true);
});

test('filterProjects handles text search queries across stack and description', () => {
  const allProjects = PORTFOLIO_DATA.projects;

  const nuxtResults = filterProjects(allProjects, 'all', 'Nuxt');
  assert.equal(nuxtResults.length >= 2, true);
  assert.equal(nuxtResults.some((p) => p.id === 'ezchildtrack'), true);

  const kycResults = filterProjects(allProjects, 'all', 'GreenID');
  assert.equal(kycResults.length, 1);
  assert.equal(kycResults[0].id, 'bullionstore-au');
});

test('searchSkills filters skills across categories', () => {
  const categories = PORTFOLIO_DATA.skillCategories;

  const results = searchSkills(categories, 'Nuxt');
  assert.equal(results.length > 0, true);
  assert.equal(results[0].skills.some((s) => s.name.includes('Nuxt')), true);

  const emptyResults = searchSkills(categories, 'NonExistentSkillXYZ');
  assert.equal(emptyResults.length, 0);
});

test('validateContactForm checks valid and invalid submissions', () => {
  // Empty
  const invalid = validateContactForm({
    name: '',
    email: 'bademail',
    subject: '',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.equal(typeof invalid.errors.name, 'string');
  assert.equal(typeof invalid.errors.email, 'string');
  assert.equal(typeof invalid.errors.subject, 'string');
  assert.equal(typeof invalid.errors.message, 'string');

  // Valid
  const valid = validateContactForm({
    name: 'Sarah Connor',
    email: 'sarah@techcorp.com',
    subject: 'Senior Full Stack Role Discussion',
    message: 'We are very impressed by your work on EZChildTrack and BullionStore.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});

test('formatMetricCounter splits numbers and units', () => {
  const res1 = formatMetricCounter('4,000+ Schools');
  assert.equal(res1.number, '4,000');
  assert.equal(res1.unit, '+ Schools');

  const res2 = formatMetricCounter('85.7%');
  assert.equal(res2.number, '85.7');
  assert.equal(res2.unit, '%');
});
