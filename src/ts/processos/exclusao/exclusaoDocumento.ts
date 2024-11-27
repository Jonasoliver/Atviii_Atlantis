import Processo from "../../abstracoes/processo"
import BuscarClientePorDocumento from "../../buscas/buscarClientePorDocumento"
import Armazem from "../../dominio/armazem"
import ImpressaorCliente from "../../impressores/impressorCliente"
import ImpressorDocumento from "../../impressores/impressorDocumento"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"
import Documento from "../../modelos/documento"

export default class ExclusaoDocumento extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        console.log('Iniciando a exclusão de um Documento...')
        let documento = this.entrada.receberTexto(`Insira o número do documento do cliente:`)
        let cliente = BuscarClientePorDocumento(this.clientes, documento)
        if (cliente != null) {
            if (cliente.Telefones.length <= 1){
                console.log("Não é possível excluir um documento.");
                console.log("Todo cliente precisa de ao menos um documento!");
                return
            }
            let excluindo = true
            while(excluindo){
                let documentos:Documento[] = []
                cliente.Documentos.forEach(documento => {
                    this.impressor = new ImpressorDocumento(documento)
                    console.log(this.impressor.imprimir())
                    let edicao = this.entrada.receberTexto("Deseja excluir este documento? (S/N)").toUpperCase()
                    if (edicao != "S") {
                        documentos.push(documento)
                    }
                })
                if (documentos.length > 0) {
                    cliente.setDocumentos(documentos)
                    return
                } else {
                    console.log("O cliente precisa de ao menos um documento, tente novamente!");
                }
            }
        } else {
            console.log("Cliente não encontrado, tente novamente! ");
            return
        }
    }
}