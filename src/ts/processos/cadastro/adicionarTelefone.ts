import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import CadastroTelefonesCliente from "./cadastroTelefonesCliente";

export default class AdicionarTelefone extends Processo {

    processar(): void {
        let Telefone = this.entrada.receberTexto('Insira o número do documento do cliente: ')
        let armazem = Armazem.InstanciaUnica
        let cliente = BuscarClientePorDocumento(armazem.Clientes, Telefone)
        if (cliente != null) {
            this.processo = new CadastroTelefonesCliente(cliente)
            this.processo.processar()
        } else {
            console.log("Cliente não encontrado, tente novamente! ");
        }
    }
}