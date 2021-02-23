
class Rota {
    constructor() {
        this.onibus = null;
    }

    gerarOnibus(modelo, quebrado, quant_assentos, quant_passageiros) {
        if (!this.checar(modelo, quebrado, quant_assentos, quant_passageiros)) return;
        this.onibus = new bus(modelo, quebrado, quant_assentos, quant_passageiros);
    }

    checarOnibus(modelo, quebrado, quant_assentos, quant_passageiros) {
        if (!(modelo instanceof String && quebrado instanceof Boolean && quant_assentos instanceof Number && quant_passageiros instanceof Number)){
            return false;
        }
        return true;
    }

}
module.exports = Rota;
