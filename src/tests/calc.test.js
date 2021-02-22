const calc = require('../backend/calc');

describe("Calc test case", () => {
  const calculadora = new calc();

  test('adds 1 + 2 to equal 3', () => {
    expect(calculadora.sum(1, 2)).toBe(3);
  });

  test('mult 1 * 2 to equal 2', () => {
    expect(calculadora.mult(1, 2)).toBe(2);
  });

});
