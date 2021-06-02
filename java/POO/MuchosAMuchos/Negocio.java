package MuchosAMuchos;

import java.util.ArrayList;
import javax.swing.table.DefaultTableModel;

public class Negocio {
    ArrayList < Alumno > listaAlu = new ArrayList();
    ArrayList < Curso > listaCur = new ArrayList();

    public void add(Curso c) {
        listaCur.add(c);
    }

    public void add(Alumno a) {
        listaAlu.add(a);
    }

    public Alumno buscarAlu(int cod) {
        for (Alumno x: listaAlu) {
            if (x.getCodigo() == cod) return x;
        }
        return null;
    }

    public Curso buscarCur(int cod) {
        for (Curso x: listaCur) {
            if (x.getCodigo() == cod) return x;
        }
        return null;
    }

    public ArrayList < Alumno > getListaAlu() {
        return listaAlu;
    }

    public ArrayList < Curso > getListaCur() {
        return listaCur;
    }

    public void tableAlumnos(DefaultTableModel at) {
        at.setRowCount(0);
        for (Alumno a: listaAlu) {
            Object v[] = {
                a.getCodigo(),
                a.getNombre()
            };
            at.addRow(v);
        }
    }
    public void tableCursos(DefaultTableModel at) {
        at.setRowCount(0);
        for (Curso a: listaCur) {
            Object v[] = {
                a.getCodigo(),
                a.getNombre()
            };
            at.addRow(v);
        }
    }
}