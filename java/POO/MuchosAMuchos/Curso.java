package MuchosAMuchos;

import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

public class Curso {
    private int codigo;
    private String nombre;
    //al ser muchos a muchos se crea una tercera clase que los relaciona, siendo esta Notas
    ArrayList < Notas > listaNotas;
    static int cuenta = 1000;

    public Curso(String nombre) {
        this.codigo = cuenta++;
        this.nombre = nombre;
        this.listaNotas = new ArrayList();
    }

    //listado en tabla de alumnos
    public void getALumnos(DefaultTableModel at) {
        at.setRowCount(0);
        for (Notas n: listaNotas) {
            Object v[] = {
                n.getAlu().getCodigo(),
                n.getAlu().getNombre()
            };
            at.addRow(v);
        }
    }
    //listado en tabla de todo
    public void getTableAll(DefaultTableModel at) {
        at.setRowCount(0);
        for (Notas n: listaNotas) {
            Object v[] = {
                n.getAlu().getCodigo(),
                n.getAlu().getNombre(),
                n.getExp(),
                n.getExf(),
                n.prom()
            };
            at.addRow(v);
        }
    }
    //agregar una nota a la lista
    void add(Notas aThis) {
        listaNotas.add(aThis);
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public ArrayList < Notas > getListaNotas() {
        return listaNotas;
    }

}