import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EdicaoEndereco extends Processo {
    private clientes: Cliente[]
    private clienteEditado: Cliente
    private impressor!: Impressor
    constructor(clienteEditado:Cliente) {
        super()
        this.clienteEditado = clienteEditado
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let rua = this.entrada.receberTexto('Qual a rua?')
        let bairro = this.entrada.receberTexto('Qual o bairro?')
        let cidade = this.entrada.receberTexto('Qual a cidade?')
        let estado = this.entrada.receberTexto('Qual o estado?')
        let pais = this.entrada.receberTexto('Qual o país?')
        let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.clienteEditado.setEndereco(endereco)
    }
}