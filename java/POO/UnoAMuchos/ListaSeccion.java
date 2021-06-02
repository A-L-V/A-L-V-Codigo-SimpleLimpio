
package UnoAMuchos;

import java.util.ArrayList;

public class ListaSeccion {
    private ArrayList<Seccion> lista = new ArrayList();

    public void add(Seccion e){
        lista.add(e);
    }
    
    public int cant(){
        return lista.size();
    }
   
    public Seccion buscar(String nombre){
        for(Seccion e: lista){
            if(e.getNombre()==nombre) return e;
        }
        return null;
    }
    
    public void borrar(Seccion e){
        lista.remove(e);
    }
    
    public ArrayList<Seccion> listado(){
        return lista;
    }
}
