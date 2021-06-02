package UnoAMuchos;

import java.util.ArrayList;
import java.util.List;
class Seccion {

    private String nombre;
    private double tarifa;
    //en una seccion tiene muchos trabajadores
    private List < Trabajador > lista;

    public Seccion(String nombre, double tarifa) {
        this.nombre = nombre;
        this.tarifa = tarifa;
        //inicar los trabajadores al crear una seccion
        this.lista = new ArrayList();
    }

    public int cant() {
        return lista.size();
    }

    public List < Trabajador > getLista() {
        return lista;
    }

    public void add(Trabajador t) {
        lista.add(t);
    }

    public String getNombre() {
        return nombre;
    }

    public double getTarifa() {
        return tarifa;
    }
}