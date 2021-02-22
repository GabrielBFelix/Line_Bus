
class bus {
    constructor(modelo, quebrado, quant_assentos, quant_passageiros) {
        this.modelo = modelo;
        this.quebrado = quebrado;
        this.quant_assentos = quant_assentos;
        this.quant_passageiros = quant_passageiros;
    }

    superlotacao() {
        let aux =  this.quant_passageiros - this.quant_assentos;
        if (aux < 0) aux = 0;
        return aux;
    }

    passageiro_Sai(quant) {
        if(this.quant_passageiros - quant < 0) this.quant_passageiros = 0;
    }
    passageiro_Entra(quant) {
        this.quant_passageiros + quant;
    }
}
module.exports = bus;
