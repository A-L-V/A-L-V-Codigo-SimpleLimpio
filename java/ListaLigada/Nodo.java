
package pilascolas;

public class Nodo {
    //Datos que guardara el Nodo
    private Object valor;
    //Referencia al nodo siguiente
    private Nodo siguiente;
    
    //Constructor. Recibe el dato a guardar y el nodo siguiente
    public Nodo(Object valor,Nodo siguiente){
        this.valor = valor;
        this.siguiente = siguiente;
    }
    
    //Getters y Setters para tomar y cambiar valores.
    public Object getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public Nodo getSiguiente() {
        return siguiente;
    }

    public void setSiguiente(Nodo siguiente) {
        this.siguiente = siguiente;
    }
}