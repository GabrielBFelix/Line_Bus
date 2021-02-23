const Bus = require('../backend/Bus');

describe("bus test case", () => {
  let onibus;

  beforeEach(() => {
    onibus = new Bus("modelo legal", false, 10, 20);
  });

  test('Testa superlotação', () => {
    expect(onibus.superlotacao()).toBe(10);
  });
  
  test('superlotação negativa', () =>{
    onibus.passageiro_Sai(21);
    expect(onibus.superlotacao()).toBe(0);
  });

  test('Testa saída de passageiros', () => {
    onibus.passageiro_Sai(15);
    expect(onibus.quant_passageiros).toBe(5);
  });

  test('Testa entrada de passageiros', () => {
    onibus.passageiro_Entra(5);
    expect(onibus.quant_passageiros).toBe(25);
  });


});
