public class Cola {
    private int cola[];
    private int primero;
    private int ultimo;

    public Cola(int n) {
        cola = new int[n];
        vaciar();
    }

    public void vaciar() {
        primero = -1;
        ultimo = -1;
    }

    public void adicionar(int valor) {
        int indMax = cola.length - 1;
        if (ultimo < indMax) {
            ultimo++;
            cola[ultimo] = valor;
            if (primero == -1)
                primero++;
        }
    }
    public int remover() {
        int valor = -1;
        if (primero > -1) {
            valor = cola[primero];
            primero++;
            if (primero > ultimo)
                vaciar();
        }
        return valor;
    }
    public String toString() {
        String cadena = "";
        if (primero > -1) {
            for (int i = primero; i <= ultimo; i++) {
                cadena = cadena + cola[i] + "\n";
            }
        } else cadena = "Cola vacia";
        return cadena;
    }
    public int sumarYremover() {
        int suma = 0;
        while (primero >= 0) {
            suma += remover();
        }
        return suma;
    }
    public int sumarYremover(int n) {
        int suma = 0;
        int cont = 0;
        if (n < ultimo) {
            while (primero >= 0 && cont < n) {
                suma += remover();
                cont++;
            }
        }
        return suma;
    }
}