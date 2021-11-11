public abstract class Conexion {
    // Declaramos la conexion a mysql
    private static Connection con;
    // Declaramos los datos de conexion a la bd
    private static final String driver = "com.mysql.jdbc.Driver";
    private static final String user = "root";
    private static final String pass = "";
    private static final String database = "temporal";
    //coneccion con base de datos mysql-java en Linux(Debian 10)
    private static final String url = "jdbc:mysql://localhost:3306/" + database + "?characterEncoding=latin1&useConfigs=maxPerformance";

    // Funcion que va conectarse a mi bd de mysql
    public void conectar() {
        try {
            Class.forName(driver);
            // Nos conectamos a la bd
            con = (Connection) DriverManager.getConnection(url, user, pass);
            // Si la conexion fue exitosa mostramos un mensaje de conexion exitosa
        } catch (ClassNotFoundException ex) {
            System.out.println(ex);
        } catch (SQLException ex) {
            System.out.println(ex);
        }
        // Si la conexion NO fue exitosa mostramos un mensaje de error
    }

    public static Connection getCon() {
        return con;
    }

    public void desconectar() {
        con = null;
    }
}

public class Negocio {
    Conexion con = new Conexion() 

    //consulta simple
    public List<Linea> lisLinea() {
        //conectamos a base de datos y obtenemos la conexion
        con.conectar();
        Connection cn = (Connection) con.getCon();
        List<Linea> lista = new ArrayList();
        //creamos una arraylist para retornarlo y obtener todos los datos
        try {
            String sql = "select * from  Linea";
            //Preparamos el statement
            PreparedStatement st = cn.prepareStatement(sql);
            //Ejecutamos la consulta
            ResultSet rs = st.executeQuery();
            //leemos el resultado de la consulta
            while (rs.next()) {
                //obtenemos y guardamos los datos
                Linea n = new Linea();
                n.setCodlin(rs.getString(1));
                n.setNombreLinea(rs.getString(2));
                lista.add(n);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return lista;
    }
    

    //consulta con parametros
    public List<Artefacto> lisArt(String cod) {
         con.conectar();
        Connection cn = (Connection) con.getCon();
        List<Artefacto> lista = new ArrayList();
        try {
            String sql = "select art_nom, art_pre from Artefacto where art_cod=?)";
            PreparedStatement st = cn.prepareStatement(sql);
            //enviamos el valor: ? de la consulta
            st.setString(1, cod+"%");
            ResultSet rs = st.executeQuery();
            while (rs.next()) {
                Artefacto n = new Artefacto();
                n.setDescrip(rs.getString(1));
                n.setPrecio(rs.getDouble(2));
                lista.add(n);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return lista;
    }

    //llamar procedures
     public void adicion(Alumno a){
         con.conectar();
        Connection cn = (Connection) con.getCon();
        try {
            CallableStatement st = cn.prepareCall("{call adicion(?,?)}");
            st.setString(1,a.getApea());
            st.setString(2,a.getNoma());
            st.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Negocio.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    //insertar datos 
    public void adicion(Venta v) throws SQLException{
        String query = "insert into Venta values(null,?,?,?);";
        con.conectar();
        Connection cn = (Connection) con.getCon();
        PreparedStatement stmt = cn.prepareStatement(query);
        stmt.setString(1, v.getCodcli());
        stmt.setString(2, v.getCodart());
        stmt.setInt(3, v.getMeses());                
        stmt.executeUpdate();
    }

    //eliminar 
     public void delete(String id) {
        conectar();
        String query = "DELETE FROM tabla where id=?";
        try {
            PreparedStatement stmt = con.prepareStatement(query);
            stmt.setString(1, vl);
            stmt.executeUpdate();
            JOptionPane.showMessageDialog(null, "Correcto");
        } catch (HeadlessException | SQLException e) {
            JOptionPane.showMessageDialog(null, "Error" + e);
        }
        desconectar();
    }
}