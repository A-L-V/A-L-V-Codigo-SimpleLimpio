package polimorfismo;
public class Postgrado extends Alumno{

    //crear alumno en postgrado
    public Postgrado(String nombre, int examenF, int examenP) {
        super(nombre, examenF, examenP);
    }
    
    //sacar promedio del alumno por polimorfismo;
    @Override
    public double promedio() {
        return (super.getExamenF()+super.getExamenP())/2;
    }
}
