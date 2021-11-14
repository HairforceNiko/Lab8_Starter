// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Phone#1-', () => {
    expect(functions.isPhoneNumber('')).toBe(false);
});

test('Phone#2-717-550', () => {
    expect(functions.isPhoneNumber('717-550')).toBe(false);
});

test('Phone#3-717-5550', () => {
    expect(functions.isPhoneNumber('717-5550')).toBe(true);
});

test('Phone#4-717-503-5550', () => {
    expect(functions.isPhoneNumber('717-503-5550')).toBe(true);
});

test('Phone#5-(717)-503-5550', () => {
    expect(functions.isPhoneNumber('(717)-503-5550')).toBe(true);
});

test('Phone#6-(7i7)-5o3-555o', () => {
    expect(functions.isPhoneNumber('(7i7)-5o3-555o')).toBe(false);
});

test("Email1-false.email.com", () => {
    expect(functions.isEmail("false.email.com")).toBe(false);
});
  
test("Email2-falseemail@", () => {
    expect(functions.isEmail("falseemail@")).toBe(false);
});
  
test("Email3-fqyuan@email.com", () => {
    expect(functions.isEmail("fqyuan@email.com")).toBe(true);
});
  
test("Email4-ema1l@email.com", () => {
    expect(functions.isEmail("ema1l@email.com")).toBe(true);
});
  
test("Password1-abc", () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});
  
test("Password2-1bc1", () => {
    expect(functions.isStrongPassword("1bc1")).toBe(false);
});
  
test("Password3-abcdef", () => {
    expect(functions.isStrongPassword("abcdef")).toBe(true);
});
  
test("Password4-abcd_ef", () => {
    expect(functions.isStrongPassword("abcd_ef")).toBe(true);
});

test("Password5-abcd$", () => {
    expect(functions.isStrongPassword("abcd$")).toBe(false);
});
  
test("Password6-abcdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", () => {
    expect(functions.isStrongPassword("abcdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")).toBe(false);
});
  
test("Date1-11 / 14 / 2021", () => {
    expect(functions.isDate("11 / 14 / 2021")).toBe(false);
});
  
test("Date2-1/14/2021", () => {
    expect(functions.isDate("1/14/2021")).toBe(true);
});
  
test("Date3-11/14/20021", () => {
    expect(functions.isDate("11/14/20021")).toBe(false);
});

test("Date4-111/14/2021", () => {
    expect(functions.isDate("111/14/2021")).toBe(false);
});
  
test("Hex1-#0", () => {
    expect(functions.isHexColor("#0")).toBe(false);
});
  
test("Hex2-#0000000", () => {
    expect(functions.isHexColor("#0000000")).toBe(false);
});
  
test("Hex3-#000", () => {
    expect(functions.isHexColor("#000")).toBe(true);
});
  
test("Hex4-#000000", () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});