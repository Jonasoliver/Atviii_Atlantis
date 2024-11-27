import Processo from "../../abstracoes/processo";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import BuscarHospedagensPorCliente from "../../buscas/buscarHospPorCliente";
import Armazem from "../../dominio/armazem";
import ImpressorHospedagem from "../../impressores/impressorHospedagem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class EdicaoHospedagem extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.log('Iniciando a edição de hospedagens...')
        let documento = this.entrada.receberTexto(`Insira o número do documento do cliente`)

        let cliente = BuscarClientePorDocumento(this.clientes, documento)
        if (cliente !== null) {
            let hospedagens = BuscarHospedagensPorCliente(cliente)
            if (hospedagens.length > 0) {
                hospedagens.forEach(hospedagem => {
                    this.impressor = new ImpressorHospedagem(hospedagem)
                    console.log(this.impressor.imprimir())

                    let editar = this.entrada.receberTexto("Deseja alterar essa hospedagem? (S/N)")
                    let clientesHospedados: Cliente[] = []
                    if (editar == "S") {
                        hospedagem.Clientes.forEach(cliente => {
                            console.log(`| Nome: ${cliente.Nome} - Nome Social: ${cliente.NomeSocial}`);
                            let resposta = this.entrada.receberTexto("Deseja manter esse cliente na hospedagem? (S/N)")
                            if (resposta !== "N") {
                                clientesHospedados.push(cliente)
                            }
                        })
                        if (clientesHospedados.length > 0) {
                            let dataInicio = this.entrada.receberData("Insira a data inicial da hospedagem")
                            let dataFinal = this.entrada.receberData("Insira a data final da hospedagem")
                            hospedagem.setClientes(clientesHospedados)
                            hospedagem.setDataInicio(dataInicio)
                            hospedagem.setDataFinal(dataFinal)
                        } else {
                            console.log("Não foi possível concluír a edição, a hospedagem precisa de ao menos um cliente");
                        }
                    }
                })
            } else {
                console.log("Nenhuma hospedagem encontrada! ");
            }
        } else {
            console.log("Cliente não encontrado :(");
        }
    }
}