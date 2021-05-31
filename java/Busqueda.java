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