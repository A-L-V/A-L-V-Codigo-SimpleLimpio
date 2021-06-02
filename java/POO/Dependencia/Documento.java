package RelacionDependencia;

public class Documento {
    private String nombre;
    private int paginas;

    public Documento(String nombre, int paginas) {
        this.nombre = nombre;
        this.paginas = paginas;
    }

    public String getNombre() {
        return nombre;
    }

    public int getPaginas() {
        return paginas;
    }

    @Override
    public String toString() {
        return "Documento{" + "nombre=" + nombre + ", paginas=" + paginas + '}';
    }

    public static void main(String[] args) {
        Documento d1 = new Documento("Tessis1", 56);
        Documento d2 = new Documento("informe", 4);
        Impresora p1 = new Impresora("color");
        System.out.println(p1.print(d2));
        System.out.println(p1.print(d1));
    }

}