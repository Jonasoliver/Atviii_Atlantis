import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {
        let impressao = `| Endereco:\n`
            + `| Rua: ${this.endereco.Rua}\n`
            + `| Bairro: ${this.endereco.Bairro}\n`
            + `| Cidade: ${this.endereco.Cidade}\n`
            + `| Estado: ${this.endereco.Estado}\n`
            + `| País: ${this.endereco.Pais}\n`
            + `| Código postal: ${this.endereco.Pais}`
        return impressao
    }
}