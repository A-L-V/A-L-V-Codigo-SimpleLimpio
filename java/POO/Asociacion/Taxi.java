package RelacionAsociacion;

public class Taxi {
    String modelo;
    Chofer cf;

    //Un taxi esta asociado con su chofer
    public Taxi(String modelo, Chofer cf) {
        this.modelo = modelo;
        this.cf = cf;
    }

    public void print() {
        System.out.println("El modelo: " + modelo);
        System.out.println("Es conducido por: " + cf.toString());
    }

    public String getModelo() {
        return modelo;
    }

    public Chofer getCf() {
        return cf;
    }
}