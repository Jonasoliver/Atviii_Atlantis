import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastroDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class CadastroClienteDependente extends Processo {

    processar(): void {
        let documento = this.entrada.receberTexto('Insira o número do documento do titular: ')
        let armazem = Armazem.InstanciaUnica
        let titular = BuscarClientePorDocumento(armazem.Clientes, documento)
        if (titular != null) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
            let cliente = new Cliente(nome, nomeSocial, dataNascimento)
            
            this.processo = new CadastroEnderecoTitular(cliente)
            this.processo.processar()
            
            this.processo = new CadastrarDocumentosCliente(cliente)
            this.processo.processar()
            
            cliente.setTitular(titular)
            titular.addDependente(cliente)
            
            let armazem = Armazem.InstanciaUnica
            armazem.Clientes.push(cliente)

            console.log('Finalizando o cadastro do cliente...')
        } else {
            console.log("Cliente não encontrado, tente novamente! ");
        }
    }
}