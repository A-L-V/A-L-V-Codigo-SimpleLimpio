public class Nodos {
    Nodo inicio = null; //Nodo de inicio;
    Nodo p; //Nodo de posicion actual;

    class Nodo {
        int dato;
        Nodo next;
    }
    public void adicionar(int num) {
        p = new Nodo();
        p.dato = num;
        if (inicio == null) {
            inicio = p;
            inicio.next = null;
        } else {
            p.next = inicio;
            inicio = p;
        }
    }
    public void mostrar() {
        p = inicio;
        while (p != null) {
            System.out.println(p.dato + "\n");
            p = p.next;
        }
    }

    public void remover(int num) {
        if (inicio.dato == num) {
            inicio = inicio.next;
            return;
        }
        Nodo q = null;
        p = inicio;
        while (p != null && p.dato != num) {
            q = p;
            p = p.next;
        }
        if (p != null) {
            if (p.next == null) q.next = null; //si el siguiente del nodo p es null, entonces el siquiente de q(anterior que p) es null(p desaparece) 
            else q.next = p.next; //se adjunta el anterior de p(q) y el siquiente de p(p.next) y desparece p;
        } else {
            System.out.println("no existe el dato");
        }
    }

    public int getCantidad() {
        p = inicio;
        int cant = 0;
        while (p != null) {
            cant++;
            p = p.next;
        }
        return cant;
    }


    public int getMayorNum() {
        int mayor = inicio.dato;
        int tmpNum;
        p = inicio.next;
        while (p != null) {
            tmpNum = p.dato;
            if (mayor <= tmpNum) {
                mayor = tmpNum;
            }
            p = p.next;
        }
        return mayor;
    }

    public Nodo buscarPosicion(int i) {
        p = inicio;
        Nodo q = null;
        if (i == 0) {
            return inicio;
        } else {
            for (int j = 0; j < i + 1; j++) {
                q = p;
                p = p.next;
            }
        }
        return q;
    }

    //ordernar por numero con el metodo de seleccion
    //hallar el menor de la posicion n hasta la ultima posicon
    public Nodo hallaMenor(int n) {
        Nodo menor = buscarPosicion(n);
        p = menor.next;
        while (p != null) {
            if (menor.dato > p.dato) {
                menor = p;
            }
            p = p.next;
        }
        return menor;
    }

    //agregar el nodo en su posicion
    public void reposicionar(int i, Nodo add) {
        p = inicio;
        Nodo q = null;
        if (i == 0) {
            inicio = add;
            inicio.next = p;
        } else {
            q = buscarPosicion(i - 1); //q es el anterior a la posicion a reposicionar
            p = q.next; //p es lo que se reposiciona
            q.next = add; //p se elimina y el siguiente es el nodo a ingresar
            add.next = p; //el ingresado le sigue p;
        }
    }
    //metodo selecion
    public void ordenarNum() {
        Nodo q;
        Nodo tmp = inicio;
        for (int i = 0; i < getCantidad(); i++) {
            tmp = buscarPosicion(i);
            q = hallaMenor(i);
            if (q != tmp) {
                remover(q.dato);
                reposicionar(i, q);
            }
        }
    }
}