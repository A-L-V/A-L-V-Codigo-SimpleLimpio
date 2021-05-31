//ordenar arreglo de menor a mayor
/*
El metodoIntercambiar busca colocar el mayor al final,
ya en el final este no se toca y 
se repite para el siguiente numero
while(estaordenado==false){
    i= -1: 5 10 2 1
    i = 0: 5 > 10
    i = 1: 10 > 2: 5 2 10 1:ordenado=false;
    i = 2: 10 > 1: 5 2 1 10:
}vuelve a repetir: indice i baja{
    i= -1: 5 2 1 10
    i = 0: 5 > 2: 2 5 1 10: ordenado=false;
    i = 1: 5 > 1: 2 1 5 10:
}vuelve a repetir: indice i baja{
    i = -1: 2 1 5 10
    i = 0: 2 > 1: 1 2 5 10: ordenado = false
}// no repite xq el indice maximo es 0;
    
*/
private int[] metodoIntercambiar(int[] arreglo) {
    boolean estaOrdenado = false;
    int indiceMax = arreglo.length - 1;
    int tmp; //temporal
    while (estaOrdenado == false) {
        estaOrdenado = true;
        //buscar el mayor y ponerlo al final
        for (int i = 0; i < indiceMax; i++) {
            //comparaciones de i y el i+1, si i es mayor, 
            //se cambian de lugares siendo que el mayor va adelante
            if (arreglo[i] > arreglo[i + 1]) {
                tmp = arreglo[i];
                arreglo[i] = arreglo[i + 1];
                arreglo[i + 1] = tmp;
                estaOrdenado = false;
            }
        }
        //siendo que el final esta ordenado se disminuye el indice 
        indiceMax--;
    }
    return arreglo;
}

/*############################################*/

//ordenar de menor a mayor
/*
el metodo Seleccion trata de buscar el menor en el indice n=0 hasta el final, 
al encontrarlo, se intercambia las posicionees del menor y n,
continua que el n aumenta y se repite el proceso

        El metodo trata d
        i= -1: 5 10 2 1
        i = 0: busca de 0 a 4: menor=1: 1 10 2 5;
        i = 1: busca de 1 a 4: menor=2: 1 2 10 5;
        i = 2: busca de 2 a 4: menor=5: 1 2 5 10;
        i = 3: busca de 3 a 4: menor=10: 1 2 5 10;
    */
public int[] metodoSeleccion(int[] arreglo) {
    int indiceMayor = arreglo.length - 1;
    int indice;
    int tmp;
    for (int j = 0; j < indiceMayor; j++) {
        //busca si del primero al ultimo cual es el menor
        indice = hallarMenor(arreglo, j);
        //coloca el menor en las primeras
        tmp = arreglo[j];
        arreglo[j] = arreglo[indice];
        arreglo[indice] = tmp;
    }
    return arreglo;
}
//hallar menor desde indMenor hasta el final
public int hallarMenor(int[] arreglo, int indMenor) {
    int menor = arreglo[indMenor];
    int indice = indMenor;
    //de indice menor hasta el final
    for (int i = indMenor; i <= arreglo.length - 1; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
            indice = i;
        }
    }
    return indice;
}

/*############################################*/
//de menor a mayor
/*
Ordenar por la izquierda
El metodo Insercion trata de ordenar por un intercambio invertido de un recorrido desde la posicion 2
se comprueba si la posicion actual es menor a la posicion anterior y se intercambia,
esto se sique comprobando con las anteriores
i=-1: 5 10 2 1
i=0:(5) 10 2 1
i=1: 5 (10) 2 1 
i=2: 5  10 (2) 1{
    10 > 2: cambio 5 2 10 1
    5 > 2: cambio  2 5 10 1
}
i=3: 2 5 10 (1){
    10 > 1: cambio 2 5 1 10
    5 > 1: cambio 2 1 5 10
    2 > 1: cambio 1 2 5 10;
}
*/

public int[] metodoInsercion(int[] arreglo) {
    int indiceMax = arreglo.length - 1;
    int j, tmp;

    for (int i = 0; i <= indiceMax; i++) {
        j = i;
        tmp = arreglo[j];
        //verificar de i+1 es mayor que i y que j >=1
        //verificacion y cambios en reversa
        while (j >= 1 && tmp < arreglo[j - 1]) {
            //cambia posiciones del la posicion a la anterior
            arreglo[j] = arreglo[j - 1];
            j--;
        }
        arreglo[j] = tmp;
    }
    return arreglo;
}