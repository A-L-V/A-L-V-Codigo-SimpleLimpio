package MuchosAMuchos;

import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

public class Alumno {
    private int codigo;
    private String nombre;
    //Un alumno tiene muchas notas
    ArrayList < Notas > listaNotas;
    static int cuenta = 100;

    public Alumno(String nombre) {
        this.codigo = cuenta++;
        this.nombre = nombre;
        this.listaNotas = new ArrayList();
    }
    //adicionar a la lista la nota
    public void add(Notas aThis) {
        listaNotas.add(aThis);
    }
    public void printNotas() {
        System.out.println("COdigo: " + codigo + "\n" + nombre);
        System.out.println("codigo\tcurso\tParcial\tFinal\tPRomedio");
        for (Notas n: listaNotas) {
            System.out.println(n.getCur().getCodigo() + "\t" + n.getCur().getNombre() + "\t" + n.getExp() + "\t" + n.getExf() + "\t" + n.prom());
        }
    }

    public void getBoleta(DefaultTableModel at) {
        at.setRowCount(0);
        for (Notas n: listaNotas) {
            Object v[] = {
                n.getCur().getCodigo(),
                n.getCur().getNombre(),
                n.getExp(),
                n.getExf(),
                n.prom()
            };
            at.addRow(v);
        }
    }


    public int getCodigo() {
        return codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public ArrayList < Notas > getListaNotas() {
        return listaNotas;
    }

    public static int getCuenta() {
        return cuenta;
    }



}