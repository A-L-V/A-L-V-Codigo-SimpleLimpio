package polimorfismo;

public class Pregrado extends Alumno{
    //crear alumno en pregrado

    public Pregrado(String nombre, int examenF, int examenP) {
        super(nombre, examenF, examenP);
    }
    
    //sacar promedio del alumno por polimorfismo;
    @Override
    public double promedio() {
        return 0.7*super.getExamenF()+0.3*super.getExamenP();
    }
    
}