import Armazem from "../dominio/armazem"
import Acomodacao from "../modelos/acomodacao"
import Cliente from "../modelos/cliente"
import Hospedagem from "../modelos/hospedagem"

export default function BuscarHospedagensPorCliente(cliente: Cliente): Hospedagem[] {
    let armazem = Armazem.InstanciaUnica
    let hospedagens = armazem.Hospedagens
    let hospedagemCliente: Hospedagem[] = []
    if (cliente !== null) {
        hospedagens.forEach(hospedagem => {
            if (hospedagem.Clientes.includes(cliente)) {
                hospedagemCliente.push(hospedagem)
            }
        })
    }
    return hospedagemCliente
}