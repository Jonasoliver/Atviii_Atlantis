import Processo from "../../abstracoes/processo";
import VerificarDocumento from "../../buscas/verificarDocumento";
import Armazem from "../../dominio/armazem";
import armazem from "../../dominio/armazem";
import { TipoDocumento } from "../../enumeracoes/TipoDocumento";
import Cliente from "../../modelos/cliente";
import Documento from "../../modelos/documento";

export default class CadastroCpf extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        let clientes = Armazem.InstanciaUnica.Clientes
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        let verificacao = VerificarDocumento(clientes, numero)
        if (verificacao == true){
            let cpf = new Documento(numero, TipoDocumento.CPF, dataExpedicao)
            this.cliente.Documentos.push(cpf)
        } else {
            console.log("Documento já registrado no sistema");
            
        }
    }
}