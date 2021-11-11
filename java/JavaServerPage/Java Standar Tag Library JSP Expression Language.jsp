JSTL
libreria que encapsula las funcionalidades comunes de JSP.

Importar
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

Etiquetas basicas: c
<c: out>
<c: foreach>
<c: set>
<c: if>
<c: choose>

Etiquetas de formato: fmt
<fmt:formatNumber>
<fmt:parseNumber>
<fmt:formatDate>
<fmt:parseDate>

Etiquetas sql:
<sql:query>
<sql:actualizacion>
<sql:setDataSource>

Etiquetas XML: x
<x:out>
<x:set>
<x:parse>
<x:forEach>
<x:when>
<x:if>

Funcion JSTL: fn
fn:contains()
fn:containsIgnoreCase()
fn:endsWith()
fn:escapeXml()

JSP Expression Language
permite acceder facilmente a los datos
<%=valor%> puede ser reemplazado
<c:out value="Nombre: ${txtNombre}"/>
<input type="text" value="Nombre: ${txtNombre}"/>

Atributos y Expresiones
<pref:etiq value="${expresion}"/>
<pref:etiq value="texto${e1} y ${e2}texto"/> se lee de izquierda a derecha, se convierte en texto y depues Atributos
<ṕref:etiq value="Un texto"/> la cadena se convierte al dato atributo
