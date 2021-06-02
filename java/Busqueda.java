public int busquedaSecNOrdenada(int[] arreglo, int valor) {
    int indMax = arreglo.length - 1;
    int i = 0;
    while (i < indMax && valor != arreglo[i]) {
        i++;
    }
    if (valor == arreglo[i])
        return i;
    else
        return -1;
}
public int busquedaSecOrdenada(int[] arreglo, int valor) {
    int indiceMax = arreglo.length - 1;
    int i = 0;
    while (i < indiceMax && valor > arreglo[i]) {
        i++;
    }
    if (valor == arreglo[i])
        return i;
    else
        return -1;
}
/*######################################################### */
// de un arreglo ordenado
/*
    La busqueda trata de buscar del medio del arreglo, 
    si el numero a buscar es menor al valor medio del arreglo,
     entonces busca por el arreglo del medio a mas
     y se vuelve a repetir con el arreglo partido a la mitad
 */
public int busquedaBinaria(int[] arreglo, int valor) {
    int indMenor = 0, indMayor = arreglo.length - 1;
    int indMedio = (indMenor + indMayor) / 2;
    while (indMenor < indMayor && valor != arreglo[indMedio]) {
        if (valor > arreglo[indMedio])
            indMenor = indMedio + 1;
        else
            indMayor = indMedio - 1;
        indMedio = (indMenor + indMayor) / 2;
    }
    if (valor == arreglo[indMedio])
        return indMedio;
    else
        return -1;
}
public boolean estaOrdenado(int[] arreglo) {
    int indMayor = arreglo.length - 1;
    boolean ordenado = true;
    for (int i = 0; i < indMayor; i++) {
        if (arreglo[i] > arreglo[i + 1])
            ordenado = false;
    }
    return ordenado;
}

/*######################################################### */
//METODO HASH
//ya me olvide como funciona y explicarlo solo pongo codigo:


public class cHash {
    private int a[];
    public cHash(int n) {
        a = new int[n];
    }
    public void metodoDivision(int valor) {
        int indice;
        int m = a.length;
        indice = valor % m;
        if (a[indice] == 0)
            a[indice] = valor;
    }
    public String muestraArreglo() {
        String cadena = "";
        int indMax = a.length - 1;
        for (int i = 0; i <= indMax; i++)
            cadena += a[i] + " ";
        return cadena;
    }
    public int descompone(int valor) {
        String cadena = String.valueOf(valor);
        int i = cadena.length() / 2;
        char indiceChar = cadena.charAt(i);
        String ind = String.valueOf(indiceChar);
        return Integer.parseInt(ind);

    }
    public void HashCuadrado(int valor) {
        int valor2 = (int) Math.pow(valor, 2);
        int m = a.length;
        int indice = descompone(valor2);
        if (a[indice] == 0)
            a[indice] = valor;
    }
}
//-----------------------------
public class cHash2 {
    private int a[];
    public cHash2(int n) {
        a = new int[n];
    }
    public void metodoDivision(int valor) {
        int indice;
        int m = a.length;
        indice = valor % m;
        if (a[indice] == 0)
            a[indice] = valor;
        else {
            //visitaLineal(indice, valor);
            visitaCuadratica(indice, valor);
        }
    }
    public String muestraArreglo() {
        String cadena = "";
        int indMax = a.length - 1;
        for (int i = 0; i <= indMax; i++)
            cadena += a[i] + " ";
        return cadena;
    }
    public int descompone(int valor) {
        String cadena = String.valueOf(valor);
        int i = cadena.length() / 2;
        char indiceChar = cadena.charAt(i);
        String ind = String.valueOf(indiceChar);
        return Integer.parseInt(ind);

    }
    public void HashCuadrado(int valor) {
        int valor2 = (int) Math.pow(valor, 2);
        int m = a.length;
        int indice = descompone(valor2);
        if (a[indice] == 0)
            a[indice] = valor;
    }
    public void visitaLineal(int ind, int valor) {
        int j = 0;
        int nuevoInd = ind + j;
        int m = a.length;
        while (a[nuevoInd] != 0) {
            j++;
            nuevoInd = (ind + j) % m;
        }
        a[nuevoInd] = valor;
    }
    public void visitaCuadratica(int ind, int valor) {
        int j = 0;
        int nuevoInd = ind + j * j;
        int m = a.length;
        while (a[nuevoInd] != 0) {
            j++;
            nuevoInd = (ind + j * j) % m;
        }
        a[nuevoInd] = valor;
    }