const bus = require('../backend/bus');

describe("Calc test case", () => {
  const onibus = new bus("modelo legal", false, 10, 20);

  test('Testa onibus lotado', () => {
    expect(onibus.superlotacao()).toBe(10);
  });

  test('Testa com assento sobrando', () => {
    onibus.passageiro_Sai(21);
    expect(onibus.superlotacao()).toBe(0);
  });
});
