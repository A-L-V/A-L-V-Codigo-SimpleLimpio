e es desencadenador?
Asociacion a una tabla
invocacion automatica
imposibilidad de llamada directa
identificacion con una transacción

USO:
cambios de cascada en tablas relacionadas de una BD
exigir una integridad de datos mas compleja que una restriccion CHECK
mensajes de error personalizados
mantenimiento de datos no normalizados
comparacion de antes y despues de su modificacion

Consideraciones:
desencadenadores son reactivos, 
restrinciones son proactivas, se comprueban antes

Generalmente se utilizan para garantizar la integridad de la información, a través de restricciones, requerimientos o acciones de verificación, para evitar errores y facilitar la sincronización de la información.

go
create trigger trig1 
on clientes [after, for] [insert,delete,update] 
as begin
	declare @hora int
	set @hora = DATEPART(hh,getdate())
	if @hora in(10,11)
	begin 
		print 'no se puede insertar en este momento'
		rollback
	end
end
