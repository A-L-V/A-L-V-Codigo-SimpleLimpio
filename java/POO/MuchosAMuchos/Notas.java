package MuchosAMuchos;

public class Notas {
    Alumno alu;
    Curso cur;
    private int exp;
    private int exf;
    //una nota del alumno a tal curso
    public Notas(Alumno alu, Curso cur, int exp, int exf) {
        this.alu = alu;
        this.cur = cur;
        this.exp = exp;
        this.exf = exf;
        //adicionar al alumno y curso la nota
        alu.add(this);
        cur.add(this);
    }

    public int prom() {
        return (exp + exf) / 2;
    }

    public Alumno getAlu() {
        return alu;
    }

    public Curso getCur() {
        return cur;
    }

    public int getExp() {
        return exp;
    }

    public int getExf() {
        return exf;
    }

}