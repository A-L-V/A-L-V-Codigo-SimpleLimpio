package Herencia;
//clase padre
public abstract class Trabajador {
    private int codt;
    private String nom;
    static int cuenta = 1;

    public Trabajador(String nom) {
        //codigo autogenerado
        this.codt = cuenta++;
        this.nom = nom;
    }
    //mandar funciones a los hijos
    public abstract double pago();

    public int getCodt() {
        return codt;
    }

    public String getNom() {
        return nom;
    }
}