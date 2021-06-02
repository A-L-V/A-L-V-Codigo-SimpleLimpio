import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

public class Cortos {

    //de una arraylist(lista) con varias clases, obtener solo una clase(subclass)
    public < T > ArrayList < T > obtenerSubClase(Class < T > subClass, List < ? super T > lista) {
        ArrayList < T > result = new ArrayList < > ();
        for (Object obj: lista) {
            if (subClass.isInstance(obj)) {
                result.add((T) obj);
            }
        }
        return result;
    }

    //crear una archivo en tu disco
    public void archivar() {
        String nombre = "archivo.txt";
        String mensaje = "texto a poner en el archivo";
        try {
            File oFile = new File(nombre);
            if (!oFile.exists()) {
                oFile.createNewFile();
            }
            FileWriter fw = new FileWriter(oFile);
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(mensaje);
            bw.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    //crear un arreglo de letras de una cadena 
    public static char[] generarArregloDeunaPalabra(String cadena, char a[]) {
        int indMax = cadena.length() - 1;
        for (int i = 0; i <= indMax; i++) {
            a[i] = cadena.charAt(i);
        }
        return a;
    }

    //GUI: codigo corto para las interfaces

    //Un comboBox se seleciona el codigo-nombre de una clase
    //Para llenar un comboBox de una clase, se elimina todo por cada actualizacion
    //y luedo se recorre y se lleva con .addItem(); 
    void llenarCombo() {
        cbCurso.removeAllItems();
        for (Curso x: neg.getListaCur()) {
            cbCurso.addItem(x.getCodigo() + "-" + x.getNombre());
        }

    }

    //Dentro de un frame hay dos paneles, estas se ocultan por medio del la inicializacion
    //ademas se crea una variable entera tipo =0;
    int tipo = 0;
    public Interfaz() {
        initComponents();

        panel1.setVisible(false);
        panel2.setVisible(false);
    }
    // Para mostrar los paneles se uso un comboBox se muestran y ocualtan por este ocdigo:
    private void CBtipoActionPerformed(java.awt.event.ActionEvent evt) {
        tipo = CBtipo.getSelectedIndex();
        panel1.setVisible(tipo == 0);
        panel2.setVisible(tipo == 1);
    }




}