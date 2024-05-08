// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Unit tests for isPhoneNumber
test('Valid phone number should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid phone number should return false', () => {
  expect(isPhoneNumber('123-4567')).toBe(false);
});

// Unit tests for isEmail
test('Valid email should return true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Invalid email should return false', () => {
  expect(isEmail('test.example.com')).toBe(false);
});

// Unit tests for isStrongPassword
test('Valid password should return true', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
});

test('Invalid password should return false', () => {
  expect(isStrongPassword('abcd1234')).toBe(false);
});

// Unit tests for isDate
test('Valid date should return true', () => {
  expect(isDate('12/25/2022')).toBe(true);
});

test('Invalid date should return false', () => {
  expect(isDate('25/12/2022')).toBe(false);
});

// Unit tests for isHexColor
test('Valid hex color should return true', () => {
  expect(isHexColor('#abc123')).toBe(true);
});

test('Invalid hex color should return false', () => {
  expect(isHexColor('#12345')).toBe(false);
});
