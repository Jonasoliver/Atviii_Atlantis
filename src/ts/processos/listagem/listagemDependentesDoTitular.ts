import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesDoTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos dependentes...')
        let documento = this.entrada.receberTexto('Insira o documento do cliente titular: ')
        let armazem = Armazem.InstanciaUnica

        let titular = BuscarClientePorDocumento(armazem.Clientes, documento)
        if (titular != undefined) {
            if (titular.Dependentes.length == 0){
                console.log("Este cliente não possui dependentes");
            } else {
                titular.Dependentes.forEach(dependente => {
                    this.impressor = new ImpressorCliente(dependente)
                    console.log(this.impressor.imprimir())
                })
            }
        } else {
            console.log("Cliente não encontrado! ");
        }
    }
}