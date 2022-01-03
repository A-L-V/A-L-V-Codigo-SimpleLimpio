colecion de nomrbes sql transact-sql
encapsular tareas repetitivas
admite 5 tipos(sistema, local, temporal, remoto, extendido)
aceptar parametros de entrada y devoler valores
devolver valores de estado para corroborrar errores
ventajas: seguro-mejorar rendimiento-reduce trafico de red- expone detalles de las tablas de bd, compartir logica de aplicacion
Anidar hasta 32 niveles, sp_help muestra info


serie de instrucciones sql bajo un nombre para llamarla despues y que se ejecuten juntas, 
mas rapido que una consulta normal

se almacenan en las tablas sysobjects y syscoments

Recomendaciones:
el usuario dbo. debe ser el propietario de todos los procedimientos
un proce por tarea
crear, probar y soluciona
evite sp_Prefix


create procedure dbo.name(@numero int(5),@city varchar(15) out)
as begin
	select * from
		where
end;
exec name 3
drop procedure name
