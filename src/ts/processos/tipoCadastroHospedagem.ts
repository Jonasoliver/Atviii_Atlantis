import Processo from "../abstracoes/processo";
import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao";
import MenuTipoCadastroHospedagem from "../menus/menuTipoCadastroHospedagem";
import CadastroHospedagem from "./cadastro/cadastroHospedagem";

export default class TipoCadastroHospedagem extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroHospedagem()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')

        switch (this.opcao) {
            case 1:
                this.processo = new CadastroHospedagem(1, NomeAcomadacao.SolteiroSimples)
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroHospedagem(1, NomeAcomadacao.SolteiroMais)
                this.processo.processar()
                break
            case 3:
                this.processo = new CadastroHospedagem(2, NomeAcomadacao.CasalSimples)
                this.processo.processar()
                break
            case 4:
                this.processo = new CadastroHospedagem(4, NomeAcomadacao.FamilaSimples)
                this.processo.processar()
                break
            case 5:
                this.processo = new CadastroHospedagem(7, NomeAcomadacao.FamiliaMais)
                this.processo.processar()
                break
            case 6:
                this.processo = new CadastroHospedagem(10, NomeAcomadacao.FamiliaSuper)
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}