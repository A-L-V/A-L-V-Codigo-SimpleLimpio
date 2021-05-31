public class Pila {
    private int pila[];
    private int tope;

    public Pila(int n) {
        pila = new int[n];
        vaciar();
    }
    public void vaciar() {
        tope = -1;
    }
    public void adicional(int valor) {
        int indMax = pila.length - 1;
        if (getTope() < indMax) {
            tope++;
            pila[getTope()] = valor;
        }
    }
    public int remover() {
        int valor = 0;
        if (getTope() >= 0) {
            valor = pila[getTope()];
            tope = getTope() - 1;
        }
        return valor;
    }
    public String toString() {
        String cadena = "";
        if (getTope() >= 0) {
            for (int i = 0; i <= getTope(); i++)
                cadena += pila[i] + "-";
        }
        return cadena;
    }
    public int sumarYremover() {
        int suma = 0;
        while (tope >= 0) {
            suma += remover();
        }
        return suma;
    }
    public int getTope() {
        return tope;
    }
}