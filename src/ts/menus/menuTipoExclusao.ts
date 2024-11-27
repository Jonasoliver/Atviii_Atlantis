import Menu from "../interfaces/menu";

export default class MenuTipoExclusaoClientes implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de exclusão desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Excluir um cliente Titular`)
        console.log(`| 2 - Excluir um cliente Dependente`)
        console.log(`| 3 - Excluir um telefone`)
        console.log(`| 4 - Excluir um documento`);
        
        console.log(`----------------------`)
    }
}