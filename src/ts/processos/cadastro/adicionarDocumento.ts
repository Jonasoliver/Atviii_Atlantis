import Processo from "../../abstracoes/processo"
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento"
import Armazem from "../../dominio/armazem"
import CadastroDocumentosCliente from "./cadastroDocumentosCliente"

export default class AdicionarDocumento extends Processo {

    processar(): void {
        let documento = this.entrada.receberTexto('Insira o número do documento do cliente: ')
        let armazem = Armazem.InstanciaUnica
        let cliente = BuscarClientePorDocumento(armazem.Clientes, documento)
        if (cliente != null) {
            this.processo = new CadastroDocumentosCliente(cliente)
            this.processo.processar()
        } else {
            console.log("Cliente não encontrado, tente novamente! ");
        }
    }
}