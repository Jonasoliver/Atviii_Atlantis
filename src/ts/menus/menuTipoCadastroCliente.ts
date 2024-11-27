import Menu from "../interfaces/menu";

export default class MenuTipoCadastroCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de cadastro? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar um cliente Titular`)
        console.log(`| 2 - Cadastrar um cliente Dependente`)
        console.log(`| 3 - Adicionar um telefone a um cliente`)
        console.log(`| 4 - Adicionar um documento a um cliente`)
        console.log(`----------------------`)
    }
}