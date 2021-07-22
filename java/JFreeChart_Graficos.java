public class Venta {
    private int mes;
    private int cantidad;
    private double total;
    public String Lmes(){
        String v[]={"","ene","feb","mar","abr","may","jun","jul", "ago","set","oct","nov","dic"};
        return v[mes];
    }
}

void circular(int an) {
    DefaultPieDataset ds = new DefaultPieDataset();
    //ng.lisven(an) retorna una array de venta con los valores el an es para deliminar el año
    for (Venta x: ng.lisven(an)) {
        ds.setValue(x.Lmes(), x.getTotal());
    }
    JFreeChart gf = ChartFactory.createPieChart3D("Anio " + an, ds, true, true, true);
    ChartPanel cp = new ChartPanel(gf);
    panel1.removeAll();
    panel1.setLayout(new java.awt.BorderLayout());
    panel1.add(cp, BorderLayout.CENTER);
    panel1.validate();
}

void barra(int an) {
    DefaultCategoryDataset ds = new DefaultCategoryDataset();
    for (Venta x: ng.lisven(an)) {
        ds.setValue(x.getTotal(), "venta", x.Lmes());
    }
    JFreeChart gf = ChartFactory.createBarChart3D("Anio " + an, "mes", "venta", ds);
    ChartPanel cp = new ChartPanel(gf);
    panel1.removeAll();
    panel1.setLayout(new java.awt.BorderLayout());
    panel1.add(cp, BorderLayout.CENTER);
    panel1.validate();
}

void lineal(int an) {
    DefaultCategoryDataset ds = new DefaultCategoryDataset();
    for (Venta x: ng.lisven(an)) {
        ds.setValue(x.getTotal(), "venta", x.Lmes());
    }
    JFreeChart gf = ChartFactory.createLineChart3D("venta" + an, "mes", "venta", ds);
    ChartPanel cp = new ChartPanel(gf);
    panel1.removeAll();
    panel1.setLayout(new java.awt.BorderLayout());
    panel1.add(cp, BorderLayout.CENTER);
    panel1.validate();
}