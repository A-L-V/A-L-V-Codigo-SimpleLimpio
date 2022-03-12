
package pilascolas;

import java.util.Arrays;

public class ListaLigada {
    //Creamos dos Nodos, que seran el primero y el ultimo nodo de nuestra lista
    private Nodo primero,ultimo;
    //Variable que llevara el tamaño de la lista
    private int tamaño;
    
    //Constructor. Inicializacion de las variables
    public ListaLigada(){
        ultimo = primero = null;
        tamaño = 0;
    }
    
    //Funcion que inserta un dato al principio de la lista, recibe como parametro el dato a insertar
    public void insertarPrimero(Object valor){
        if(tamaño == 0){
            primero = new Nodo(valor,null);
            ultimo = primero;
            tamaño++;
        }
        else{
            Nodo temporal = primero;
            primero = new Nodo(valor,temporal);
            tamaño++;
        }
    }
    //Funcion que ordena el numero, el parametro es de la funcion ultimoinsertar
    public void ordenar(Object insertado){
        boolean ordenado=false;
        int indMax = getTamaño();
        int temp;
        Object [] arreglo = getElementos();
        while(ordenado==false){
            ordenado=true;
            int i = 0;
            while((int) arreglo[i] > (int) insertado && i <= indMax){
                temp= Integer.parseInt((String) arreglo[i]);
                arreglo[i]=arreglo[i+1];
                arreglo[i+1]=temp;
                ordenado=false;
            }
            tamaño--;
        }
    }

    
    //Funcion que inserta un dato al final de la lista, recibe como parametro el dato a insertar
    public void insertarUltimo(Object valor){
        if(tamaño == 0){
            primero = new Nodo(valor,null);
            ultimo = primero;
            tamaño++;
        }
        else{
            Nodo temporal = ultimo;
            ultimo = new Nodo(valor, null);
            temporal.setSiguiente(ultimo);
            tamaño++;
        }
        ordenar(valor);
    }
    
    //Funcion que elimina el primer nodo de la lista
    public void eliminarPrimero(){
        if(tamaño == 0)return;
        Nodo temporal = primero;
        temporal = primero.getSiguiente();
        primero = null;
        primero = temporal;
        tamaño--;
    }
    
    //Funcion que elimmina el ultimo nodo de la lista
    public void eliminarUltimo(){
        if(tamaño == 0)return;
        if(tamaño == 1){
            ultimo = primero = null;
            tamaño = 0;
            return;
        }
        Nodo temporal = primero;
        while(temporal.getSiguiente() != ultimo){
            temporal = temporal.getSiguiente();
        }
        temporal.setSiguiente(null);
        ultimo = temporal;
        tamaño--;
    }
    
    //Funcion que regresa el tamaño de la lista... es decir el numero de elementos que contiene
    public int getTamaño(){
        return tamaño;
    }
    
    //Funcion que devuelve un array con los elementos de la lista
    public Object[] getElementos(){
        if(tamaño == 0)return new Object[0];
        Object[] elementos = new Object[tamaño];
        int i = 0;
        Nodo temporal = primero;
        while(temporal != null){
            System.out.print(temporal.getValor().toString()+"  ");
            elementos[i++] = temporal.getValor();
            temporal = temporal.getSiguiente();
        }
        System.out.println("");
        return elementos;
    }
    
        public void eliminarDecimo(){
            Object[] valores = new Object[tamaño];
            valores = getElementos();
            for(int i=0;i<tamaño;i++){
                eliminarPrimero();
            }
            for(int i=0;i<tamaño;i++){
                if(10!=i){
                    insertarUltimo(valores[i]);
                }            
            }
        }

        public static void main(String[] args) {
            ListaLigada lis = new ListaLigada();
            for(int i=0;i<25;i++){
                lis.insertarUltimo(i);
            }
            lis.eliminarDecimo();
            lis.getElementos();

        }
        
        public String recursivo(String[] arreglo, int i){
            String text = "";
            if(i == arreglo.length-1){
                text = arreglo[i];
            }else {
                if(i >= 0){
                    text += recursivo(arreglo, i -1);
                }
            }
            return text;
        }

}
