package polimorfismo;

public abstract class Alumno {
    private String nombre;
    private int examenF;
    private int examenP;

    //el promedio es diferente en pregrado y postgrado
    public abstract double promedio();

    public Alumno(String nombre, int examenF, int examenP) {
        this.nombre = nombre;
        this.examenF = examenF;
        this.examenP = examenP;
    }


    public String observacion() {
        return promedio() >= 12 ? "Aprobado" : "Desaprobado";
    }

    public String toString() {
        return "Alumno{" + "nombre=" + nombre + ", examenF=" + examenF + ", examenP=" + examenP + ",promedio" + promedio() + ", observacion" + observacion() + "}";
    }
    public String getNombre() {
        return nombre;
    }
    public int getExamenF() {
        return examenF;
    }
    public int getExamenP() {
        return examenP;
    }
     public static void main(String[] args) {
        ArrayList<Alumno> lista = new ArrayList();
        lista.add(new Pregrado("a",14,10));
        lista.add(new Postgrado("b",14,10));
        lista.add(new Pregrado("c",14,10));
        lista.add(new Postgrado("d",14,10));
        lista.add(new Pregrado("e",14,10));
        lista.add(new Postgrado("f",14,10));
        lista.add(new Pregrado("g",14,10));
        for( Alumno x: lista){
            System.out.println(x.toString()+"\n");
        }
    }
}