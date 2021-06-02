package UnoAMuchos;

public class Trabajador {
    private int codigo;
    private String nombre;
    private int horas;
    //un trabajador tiene sola 1 seccion
    private Seccion sec;
    static int cuenta = 10;

    public Trabajador(String nombre, int horas, Seccion sec) {
        this.codigo = cuenta++;
        this.nombre = nombre;
        this.horas = horas;
        this.sec = sec;
        //enviar a la lista de trabajadores de la seccion este trabajador
        sec.add(this);
    }

    public double pago() {
        return sec.getTarifa() * horas;
    }

    public int getCodigo() {
        return codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public int getHoras() {
        return horas;
    }

    public Seccion getSec() {
        return sec;
    }

    public static int getCuenta() {
        return cuenta;
    }
}