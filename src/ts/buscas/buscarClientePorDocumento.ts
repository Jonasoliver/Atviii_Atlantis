import Cliente from "../modelos/cliente";

export default function BuscarClientePorDocumento(clientes: Cliente[], numero: string): Cliente | null {
    for (const cliente of clientes) {
        for (const documento of cliente.Documentos) {
            if (documento.Numero == numero) {
                return cliente;
            }
        }
    }
    return null;
}