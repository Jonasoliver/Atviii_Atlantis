import Menu from "../interfaces/menu";

export default class MenuTipoListagemHospedagem implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de listagem desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Todas as hospedagens`)
        console.log(`| 2 - Todas as hospedagens de um cliente específico`)
        
        console.log(`----------------------`)
    }
}