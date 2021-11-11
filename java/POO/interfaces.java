Sintaxis de interfaces:
la clase para utilizruna interface se usa: implement

public interface cable{
    final double pago=67;
    public void pagocable();

}

public class cliente implements telefono, cable {
    public void pagocable(){}
    public void pagotel(){}
}


public interface telefono{
    final double pago=67;
    public void pagotel();

}