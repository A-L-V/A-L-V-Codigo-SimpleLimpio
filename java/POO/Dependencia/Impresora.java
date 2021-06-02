package RelacionDependencia;

public class Impresora {
    private String tipo;

    public Impresora(String tipo) {
        this.tipo = tipo;
    }

    public String getTipo() {
        return tipo;
    }
    //La funcion imprimir depende de un documento
    public String imprimir(Documento doc) {
        return "Impresora{" + "tipo=" + tipo + "\n" + doc.toString() + "}";
    }

}