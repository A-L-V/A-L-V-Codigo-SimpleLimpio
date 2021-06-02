package Herencia;
//clase hijo
public class Obrero extends Trabajador {
    private int secuencia;
    private double horas;
    //con super optiene los atributos de 
    public Obrero(String nom, int sec, double horas) {
        super(nom);
        this.secuencia = sec;
        this.horas = horas;
    }
    //obtener funciones de la clase padre
    @Override
    public double pago() {
        double v[] = {
            0,
            8.2,
            9.2,
            8.7
        };
        return horas * v[secuencia];
    }

    public String seccion() {
        String v[] = {
            "Tintoreria",
            "Acabado",
            "Planchado"
        };
        return v[secuencia];
    }

    public int getSecuencia() {
        return secuencia;
    }

    public double getHoras() {
        return horas;
    }
}