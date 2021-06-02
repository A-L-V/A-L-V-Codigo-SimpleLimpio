import java.util.*;

public class Listado {
    private ArrayList < Empleado > lis;

    public Listado() {
        lis = new ArrayList < > ();
        lis.add(new Empleado("Perez Juan", 2400));
        lis.add(new Empleado("Caceres Ana", 2100));
        lis.add(new Empleado("Perez Jose", 2800));
        lis.add(new Empleado("Avila Luis", 2100));
        lis.add(new Empleado("Lopez Joel", 2900));
        lis.add(new Empleado("Montes Rosa", 2300));
    }


    //filtrar una clase de arrayList de varias clases
    public < T > ArrayList < T > filterList(Class < T > subClass) {
        ArrayList < T > result = new ArrayList < > ();

        for (Object obj: lis) {
            if (subClass.isInstance(obj)) {
                result.add((T) obj);
            }
        }

        return result;
    }


    //ordenar una clase de arrayList
    public void ordenarCodigo() {
        Collections.sort(lis, new ordenarCodigo()); //ordenar la lista en base a la clase ordeCod
    }

    public void ordenarNombre() {
        Collections.sort(lis, new ordenarNombre());
    }

    public void ordernarSueldo() {
        Collections.sort(lis, new ordenarNombre());
    }

    class ordenarCodigo implements Comparator < Empleado > {
        @Override public int compare(Empleado e1, Empleado e2) {
            return (e1.getCode() - e2.getCode());
        }
    }


    class ordenarNombre implements Comparator < Empleado > {
        @Override public int compare(Empleado e1, Empleado e2) {
            int res = e1.getNome().compareTo(e2.getNome());
            return res;
        }

    }

    class ordernarSueldo implements Comparator < Empleado > {

        @Override public int compare(Empleado e1, Empleado e2) {
            int res;
            if (e1.getSueldo() > e2.getSueldo()) res = 1;
            else if (e1.getSueldo() == e2.getSueldo()) res = 0;
            else res = -1;
            return res;
        }
    }


    public List < Empleado > getLis() {
        return lis;
    }

}