const Rota = require('../backend/Rota');
describe("rota test case", () => {
    const rota = new Rota();
  
    test('should not generate a bus', () => {
        expect(rota.gerarOnibus(2, 2, 'quant_assentos', 'nada')).toBeNull();
    });
    
    test('should generate a bus', () => {
        expect(rota.gerarOnibus('onibus', false, 15, 0)).not.toBeNull();
    });
    
  });
  