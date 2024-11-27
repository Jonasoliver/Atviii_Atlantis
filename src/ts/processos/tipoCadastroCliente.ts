import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import AdicionarDocumento from "./cadastro/adicionarDocumento";
import AdicionarTelefone from "./cadastro/adicionarTelefone";
import CadastroClienteDependente from "./cadastro/cadastroClienteDependente";
import CadastroClienteTitular from "./cadastro/cadastroClienteTitular";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            case 3:
                this.processo = new AdicionarTelefone()
                this.processo.processar()
                break
            case 4:
                this.processo = new AdicionarDocumento()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}