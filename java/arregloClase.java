
public class Arreglo_trabajador {
    trabajador vec[]= new trabajador[10];
    int cuenta;
    public int tamaño(){
        return cuenta ;
    }
    public trabajador obtener (int pos){
        return vec[pos];
    }

    public void adicion(trabajador d){
        vec[cuenta]=d;
        cuenta++;
    }

    public void ordNombre(){
    trabajador aux;
    int pos, cp;
    for(pos=0; pos<cuenta-1; pos++)
    for(cp=pos+1; cp<cuenta; cp++)
        if(vec[pos].getNombre().compareTo(vec[cp].getNombre())>0){
        aux=vec[pos];
        vec[pos]=vec[cp];
        vec[cp]=aux;
        }
    }
    public void ordSueldo(){
    trabajador aux;
    int pos, cp;
    for(pos=0; pos<cuenta-1; pos++)
    for(cp=pos+1; cp<cuenta; cp++)
        if(vec[pos].getSueldobruto()<vec[cp].getSueldobruto()){
        aux=vec[pos];
            vec[pos]=vec[cp];
            vec[cp]=aux;
        }
    }
    //busqueda binaria
    public trabajador buscar(int cod){
    int inicio , fin , pm; // punto medio 
    inicio=0;   fin=cuenta-1;
    while(inicio<fin){
        pm=(inicio+fin)/2;
        if(vec[pm].getCode()==cod)return vec[pm];
        if(cod>vec[pm].getCode())
            inicio=pm+1; // buscar la parte superior 
        else 
            fin=pm-1; // buscar en la parte inferior 
    }
    return null;
    }
}

