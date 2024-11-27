import { exec } from "child_process"
import Processo from "../../abstracoes/processo"
import MenuTipoDocumento from "../../menus/menuTipoDocumento"
import Cliente from "../../modelos/cliente"
import Telefone from "../../modelos/telefone"

export default class CadastroTelefonesCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de telefones...')
        while (this.execucao) {
            let ddd = this.entrada.receberTexto('Qual a ddd do telefone?')
            let numero = this.entrada.receberTexto('Qual o número do telefone?')
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)
            let opcao = this.entrada.receberTexto("Quer inserir outro telefone (S/N)").toUpperCase()
            if (opcao != "S"){
                this.execucao = false
            }
        }
    }
}