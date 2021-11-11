Ciclo de vida
init()
service()
doGet() | doPost(), en netbeans: processRequest()
destroy()


public void processRequest(HttpServletRequest request, HttpServletResponse reponse)
throws ServletException, IOException{ 
    response.setContentType("text/html;char=UTF-8");
}
public void doPost(HttpServletRequest request, HttpServletResponse reponse)
throws ServletException, IOException{ 
    processRequest(request,response);
}
public void doGet(HttpServletRequest request, HttpServletResponse reponse)
throws ServletException, IOException{ 
    processRequest(request,response);
}

Paso de un valor de un servlet a pagina jsp
setAttribute(String nombre, Object o)
getAttribute(String nombre)
getRequestDispatcher(String ruta)
forward(request,response) reenvia objetos a otro recurs jsp o servlet