import Processo from "../abstracoes/processo"
import MenuTipoExclusaoClientes from "../menus/menuTipoExclusao"
import ExclusaoClienteDependente from "./exclusao/exclusaoClienteDependente"
import ExclusaoClienteTitular from "./exclusao/exclusaoClienteTitular"
import ExclusaoDocumento from "./exclusao/exclusaoDocumento"
import ExclusaoTelefone from "./exclusao/exclusaoTelefone"

export default class TipoExclusaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExclusaoClientes()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ExclusaoClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ExclusaoClienteDependente()
                this.processo.processar()
                break
            case 3:
                this.processo = new ExclusaoTelefone()
                this.processo.processar()
                break
            case 4:
                this.processo = new ExclusaoDocumento()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}