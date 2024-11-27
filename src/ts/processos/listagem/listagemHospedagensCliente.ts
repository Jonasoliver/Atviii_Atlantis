import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import BuscarHospedagensPorCliente from "../../buscas/buscarHospPorCliente";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";

export default class ListagemHospedagensCliente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log('Iniciando a listagem...')
        let documento = this.entrada.receberTexto('Insira o documento do cliente: ')
        let armazem = Armazem.InstanciaUnica
        let cliente = BuscarClientePorDocumento(armazem.Clientes, documento)
        if (cliente !== null) {
            let hospedagens = BuscarHospedagensPorCliente(cliente)
            if (hospedagens.length > 0) {
                hospedagens.forEach(hospedagem => {
                    this.impressor = new ImpressorHospedagem(hospedagem)
                    console.log(this.impressor.imprimir())
                })
            } else {
                console.log("Nenhuma hospedagem encontrada! ");
            }
        } else {
            console.log("Cliente não encontrado :(");
        }
    }
}