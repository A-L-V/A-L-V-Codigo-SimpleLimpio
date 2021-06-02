package RelacionAsociacion;

public class Chofer {
    private String nombre;
    private String brevete;

    public Chofer(String nombre, String brevete) {
        this.nombre = nombre;
        this.brevete = brevete;
    }

    @Override
    public String toString() {
        return "Chofer{" + "nombre=" + nombre + ", brevete=" + brevete + '}';
    }

    public String getNombre() {
        return nombre;
    }

    public String getBrevete() {
        return brevete;
    }

    public static void main(String[] args) {
        Chofer c1 = new Chofer("DIaz", "1324");
        Taxi t1 = new Taxi("Toyota", c1);
        Chofer c2 = new Chofer("Gonzales", "9789");
        Taxi t2 = new Taxi("Hunday", c2);
        t1.print();
        t2.print();
    }

}