
class Rota {
    constructor() {
        this.onibus = null;
        console.log('rota criada');
    }

    gerarOnibus(modelo, quebrado, quant_assentos, quant_passageiros) {
        // rota.gerarOnibus('onibus', false, 15, 0);
        if (!this.checarOnibus(modelo, quebrado, quant_assentos, quant_passageiros)){
            console.log('nulo');
            return null;
        }
        return new bus(modelo, quebrado, quant_assentos, quant_passageiros);
    }

    checarOnibus(modelo, quebrado, quant_assentos, quant_passageiros) {
        return (modelo instanceof String && quebrado instanceof Boolean && quant_assentos > 0 && quant_passageiros >= 0)
    }

}
module.exports = Rota;
