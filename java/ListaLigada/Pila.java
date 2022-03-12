/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package pilascolas;

/**
 *
 * @author Javier
 */
public class Pila {

    //Declaramos una variable tipo ListaLigada
    private ListaLigada pila;

    //Contructor. Inicializacion de la listaligada
    public Pila() {
        pila = new ListaLigada();
    }

    //Funcion que inserta un elemento a la pila
    public void push(Object dato) {
        pila.insertarPrimero(dato);
    }

    //Funcion que elimina un elemento de la pila
    public Object pop() {
        Object Dato = pila.getElementos()[0];
        pila.eliminarPrimero();
        return Dato;
    }

    //Funcion que devuelve el tope de la pila
    public Object peek() {
        return pila.getElementos()[0];
    }

    //Funcion que devueleve el tamaño de la pila
    public int size() {
        return pila.getTamaño();
    }

    //Funcion que devuelve los elementos de la pila
    public Object[] getElementos() {
        return pila.getElementos();
    }

    public String wxW() {
        String texto = "no es cadena xwWr";
        int tamaño;
        tamaño = size();
        if (tamaño % 2 == 0) {
            Object[] valores = getElementos();
            String w = "";
            String wR = "";
            for (int i = 0; i < tamaño / 2; i++) {
                w += valores[i];
            }
            for (int i = tamaño-1; i > tamaño/2 -1; i--) {
                wR += valores[i];
            }
            if (w.equals(wR)) {
                texto = "es cadena xwWr";
            }
        }
        return texto ;
    }

    public static void main(String[] args) {
        Pila pila = new Pila();
        pila.push(1);
        pila.push(0);
        pila.push(1);
        pila.push(1);
        pila.push(1);
        pila.push(1);
        pila.push(0);
        pila.push(1);
        System.out.println(pila.wxW());
    }
}
