//no entendi :c, buscarlo como: funcion ackerman
public int ackermann(int m, int n) {
    int result;
    if (m == 0)
        result = n + 1;
    else {
        if (n == 0)
            result = ackermann(m - 1, 1);
        else
        if (m > 0 && n > 0)
            result = ackermann(m - 1, ackermann(m, n - 1));
        else result = 0;
    }
    return result;
}

//ind es la cantidad de n[];
public int contarVeces(int n[], int ind, int valor) {
    int cont;
    if (ind == -1)
        cont = 0;
    else {
        if (n[ind] == valor)
            cont = 1 + contarVeces(n, ind - 1, valor);
        else
            cont = contarVeces(n, ind - 1, valor);
    }
    return cont;
}

//n es la cantidad de a[];
public int hallaMayor(int a[], int n) {
    int mayor;
    if (n == 0)
        mayor = a[n];
    else {
        mayor = hallaMayor(a, n - 1);
        if (a[n] > mayor)
            mayor = a[n];
    }
    return mayor;
}

//n es la cantidad de a[][];
public int sumarDiagonal(int a[][], int n) {
    int suma;
    if (n == -1)
        suma = 0;
    else
        suma = a[n][n] + sumarDiagonal(a, n - 1);
    return suma;
}

public static int factoriar(int n) {
    int resultado;
    if (n == 0)
        resultado = 1;
    else
        resultado = n * factoriar(n - 1);
    return resultado;
}
public static int Potenciar(int a, int b) {
    int resultado;
    if (b == 0)
        resultado = 1;
    else
        resultado = a * Potenciar(a, b - 1);
    return resultado;
}
public static int Multiplicar(int a, int b) {
    int resultado;
    if (b == 0)
        resultado = 0;
    else
        resultado = a + Multiplicar(a, b - 1);
    return resultado;
}
//el ind es la cantidad de n[];
public int sumaImpares(int n[], int ind) {
    int suma = 0;
    if (ind == -1)
        suma = 0;
    else {
        if (n[ind] % 2 != 0)
            suma = n[ind] + sumaImpares(n, ind - 1);
        else
            suma = sumaImpares(n, ind - 1);
    }
    return suma;
}