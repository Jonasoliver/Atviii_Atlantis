import Armazem from "../dominio/armazem"
import Acomodacao from "../modelos/acomodacao"

export default function BuscarAcomodacaoPorNome(nome:string):Acomodacao | undefined{
    let armazem = Armazem.InstanciaUnica
    let acomodacao = armazem.Acomodacoes.find(
        (acomodacao) => acomodacao.NomeAcomadacao == nome
    )
    return acomodacao
}