import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorTelefone from "../../impressores/impressorTelefone";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class EdicaoTelefones extends Processo {
    private clientes: Cliente[]
    private clienteEditado: Cliente
    private impressor!: Impressor
    private telefones: Telefone[] = []
    constructor(clienteEditado:Cliente) {
        super()
        this.clienteEditado = clienteEditado
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        this.clienteEditado.Telefones.forEach(telefone => {
            this.impressor = new ImpressorTelefone(telefone)
            console.log(this.impressor.imprimir())
            let edicao = this.entrada.receberTexto("Deseja editar este número? (S/N)").toUpperCase()
            if (edicao == "S") {
                let ddd = this.entrada.receberTexto('Qual o DDD do telefone?')
                let numero = this.entrada.receberTexto('Qual o número do telefone?')
                let tel = new Telefone(ddd,numero)
                this.telefones.push(tel)
            } else {
                this.telefones.push(telefone)
            }
        })
        this.clienteEditado.setTelefones(this.telefones)
    }
}