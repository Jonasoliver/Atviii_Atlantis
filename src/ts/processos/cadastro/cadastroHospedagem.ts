import Processo from "../../abstracoes/processo";
import BuscarAcomodacaoPorNome from "../../buscas/buscarAcomodacaoPorNome";
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento";
import Armazem from "../../dominio/armazem";
import Hospedagem from "../../modelos/hospedagem";

export default class CadastroHospedagem extends Processo {
    private armazem: Armazem
    private capacidade: number
    private nome: string
    constructor(capacidade: number, nome: string) {
        super()
        this.armazem = Armazem.InstanciaUnica
        this.capacidade = capacidade
        this.nome = nome
    }
    processar(): void {
        console.log('Iniciando o cadastro de uma nova hospedagem...')
        let buscando = true
        let clientesHospedados = []
        while (buscando) {
            let documento = this.entrada.receberTexto('Insira o número do documento do cliente: ')
            let cliente = BuscarClientePorDocumento(this.armazem.Clientes, documento)
            if (cliente !== null) {
                clientesHospedados.push(cliente)
                if (clientesHospedados.length < this.capacidade) {
                    let opcao = this.entrada.receberTexto("Deseja Adicionar mais um cliente a esta hospedagem? (S/N)")
                    if (opcao === "N") {
                        buscando = false
                    }
                } else {
                    buscando = false
                }
            } else {
                console.log("Cliente não encontrado, tente novamente! ");
            }
        }
        let dataInicio = this.entrada.receberData("Insira a data inicial da hospedagem")
        let dataFinal = this.entrada.receberData("Insira a data final da hospedagem")
        let acomodacao = BuscarAcomodacaoPorNome(this.nome)
        if (acomodacao !== undefined) {
            let hospedagem = new Hospedagem(acomodacao, clientesHospedados, dataInicio, dataFinal)
            this.armazem.Hospedagens.push(hospedagem)
        }
        console.log('Finalizando o cadastro da hospedagem...')
    }
}