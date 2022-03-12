
package pilascolas;


public class Cola {
    private ListaLigada cola;
    
    public Cola(){
        cola = new ListaLigada();
    }
    
    public void encolar(Object dato){
        cola.insertarUltimo(dato);
    }
    
    public Object desencolar(){
        Object dato = cola.getElementos()[0];
        cola.eliminarPrimero();
        return dato;
    }
    
    public Object frente(){
        return cola.getElementos()[0];
    }
    
    public int size(){
        return cola.getTamaño();
    }
    
    public Object[] getElementos(){
        return cola.getElementos();
    }
    
}
