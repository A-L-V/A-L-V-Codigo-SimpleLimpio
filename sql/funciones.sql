select id, name, gender , count(gender) over (partition by gender) as total, avg(age) over (partition by gender) as promedio 
from student

select orderId, employedId, row_number() over (order by ID) from orders

pivot: //convierte valores de una fila en columnas
select * from orden pivot ( sum(cant)) for product in ([bicicleta],[cadena])

Funciones de agragado:
avg 		promedio
count	devuelme el numero de registros
sum		suma de todos los valores
max		
min

DLL:
create	 crear tablas, campos e indices
drop      	 eliminar tablas e indices
alter 	 modificar tablas, agregando campos o cambiando la definicion de los campos

DML: 
select	 consultar registros de la BD con un criterio determinado
insert	 cargar lotes de datos
update	 modificar valores de campos y registros especificados
delete	 eliminar registros
truncate	 borrado completo de una tabla

Clausulas:
from	 	especificar la tabla que se va selecionar
where	 	especificar condiciones de los registros 
Group by        separa registros selecionados en grupos especificos
order by  	ordenar registros de acuerdo con un orden especifico(asc,desc)

Operadores logicos:
and    			or			not
Operaciones de comparación:
< 	> 	<>	<=	>=	=	between	like(comparacion de un modelo)	in(especificar registros en una base de datos)
