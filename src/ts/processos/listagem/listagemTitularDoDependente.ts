import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularDoDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem...')
        let documento = this.entrada.receberTexto('Insira o documento do cliente dependente: ')
        let armazem = Armazem.InstanciaUnica

        let cliente = BuscarClientePorDocumento(armazem.Clientes, documento)
        if (cliente != null && cliente.Titular != undefined) {
            if (cliente.Titular){
                this.impressor = new ImpressorCliente(cliente.Titular)
                console.log(`\n Este é o titular deste cliente: \n`);
                console.log(this.impressor.imprimir())
            } else {
                console.log(`Este cliente não possui um titular`);
            }
        } else {
            console.log("Cliente não encontrado, tente novamente! ");
        }
    }
}