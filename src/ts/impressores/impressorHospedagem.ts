import { text } from "stream/consumers";
import Impressor from "../interfaces/impressor";
import Hospedagem from "../modelos/hospedagem";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";
import ImpressorTelefones from "./impressorTelefones";

export default class ImpressorHospedagem implements Impressor {
    private hospedagem: Hospedagem
    private impressor!: Impressor

    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| ${this.hospedagem.Acomodacao.NomeAcomadacao}\n`
            + `| Data Início: ${this.hospedagem.DataInicio.toLocaleDateString()}\n`
            + `| Data Final: ${this.hospedagem.DataFinal.toLocaleDateString()}\n`
            + `| Cliente(s) hospedados: \n`

        this.hospedagem.Clientes.forEach( cliente => {
            let textoCliente = `| Nome: ${cliente.Nome}\n`
            + `| Nome Social: ${cliente.NomeSocial}`
            
            this.impressor = new ImpressorDocumentos(cliente.Documentos)
            textoCliente = textoCliente + `\n${this.impressor.imprimir()}\n`
        
            impressao = impressao + textoCliente
        })



        impressao = impressao + `\n****************************`
        return impressao
    }

}