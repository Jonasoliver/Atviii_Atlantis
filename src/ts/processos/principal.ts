import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import EdicaoCliente from "./edicao/edicaoCliente"
import EdicaoHospedagem from "./edicao/edicaoHospedagem"
import ExclusaoHospedagem from "./exclusao/exclusaoHospedagem"
import ListagemAcomodacoes from "./listagem/listagemAcomodacoes"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoCadastroHospedagem from "./tipoCadastroHospedagem"
import TipoExclusaoCliente from "./tipoExclusaoCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import TipoListagemHospedagem from "./tipoListagemHospedagem"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new EdicaoCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExclusaoCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new TipoCadastroHospedagem()
                this.processo.processar()
                break
            case 7:
                this.processo = new EdicaoHospedagem()
                this.processo.processar()
                break
            case 8:
                this.processo = new TipoListagemHospedagem()
                this.processo.processar()
                break
            case 9:
                this.processo = new ExclusaoHospedagem()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
                break
        }
    }
}