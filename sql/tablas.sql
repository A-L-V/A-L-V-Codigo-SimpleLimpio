
create database DBprueba
go
use BDprueba
go
create table TBempleado(
	code	char(5)		not null (primary key)
	ap		varchar(30)	not null
)
--no se puede modificar o borrar

alter table TBempleado
add constraints
pkempleado
primary key(code)
go
--ventajas: se puede borrar o modificar

alter table TBempleado
add primary key (code)
go

Regla de negocio

alter table TBempleado
add constraint UQApellido
unique(ap_emple)
go
-- que el apellido sea unico

alter table TBempleado
add constraint
DFFecha_Ingreso
default getdate() for fin_emple
go
--valores por defecto

alter teable TBempleado
add constraint cksueldo
check(sue > 1500 and sue <= 15000) // check(sue between 1500 and 15000)
go
--valor con restrinciones, check tambien funciona para caracteres

alter table TBempleado
add constraint ckecivil
check(not(eci='viudo') or not (eci ='divorciado')) //check(eci not in('viudo',divorciado'))
go
-- chequear que no tenga cierto valores
