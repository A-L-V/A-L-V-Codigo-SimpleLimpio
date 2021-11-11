JSP esta basado en los servlets, destinados a ejecutarse en el servidor

Elementos para insertar en una pagina web
1. Directivas: permite control de distintos parametros del servlet
instrucciones procesadas por el motor JSP,
<%@ page import="javax.naming.*" %>
<%@ include file="footer.html" %>
<%@ page import="java.util" %>

2. Acciones: altera el flujo de ejecucion de la pagina(redireccion)
incluye elementos externos en la pagina actual o redirigir peticiones a otra pagina
La directiva include permite insertar codigo en la pagina antes de que esta se transforme en servlet. se reutiliza jsp o html
<jsp:include> permite insertar la salida de otra pagina jsp
<jsp:pligun> permite incluir applets que hagan uso de java 2
<jsp:forward> redirige la peticion a otra pagina JSP

3. Codigo: variables, metodos, sentencias...
* Declaraciones: <%! private int hora;%>
* Expresiones: <%= nombre%>
* Scriptlets <%   //codigo %>
* COmentario <%--  xd --%>

LLamar de pagina a otra pagina
<form action="pagina.jsp" method="get">
    <input name="nombre">
</form>

<%
    String nombre = request.getParameter("nombre");
%>
