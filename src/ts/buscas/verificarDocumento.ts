import Cliente from "../modelos/cliente";

export default function VerificarDocumento(clientes: Cliente[], numero: string): boolean {
    for (const cliente of clientes) {
        for (const documento of cliente.Documentos) {
            if (documento.Numero === numero) {
                return false;
            }
        }
    }
    return true;
}