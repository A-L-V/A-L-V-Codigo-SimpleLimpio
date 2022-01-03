Estructura de datos creada en memoria RAM producto de un select
Permite navegar dentro de las filas para obtener informacion
Partes del cursos:
	Declarar cursos: --declarar variables y devolverlosn conjunto de valores
	Abrir el cusor:	
	Recuperar datos
	Cerrar el cursor
	Desalojar

Estructura:
go
alter proc cursor1
as begin
--declarar cursos
	declare tp cursor for 
	select cli_nom, cli_cre from Clientes
	declare @nom varchar(30)
	declare @cre numeric(8,1)
	declare @con int, @con1 int, @con2 int
	open tp --abrir cursos
	print 'nombre                        credito'
	set @con = 0
	set @con1 = 0
	set @con2 = 0
	fetch next from tp into @nom, @cre
	while @@FETCH_STATUS=0 --si hay datos
	begin
		print @nom + STR(@cre)
		if @cre < 1500
			set @con=@con+1
		else if @cre <3000
				set @con1 = @con1 + 1
			else 
				set @con2=@con2+1
		fetch next from TP into @nom,@cre
	end
	print '# credito < 1500   ' + str(@con)
	print '# creditos <1500 >3000   ' +str(@con1)
	print '# creditos > 3000          ' + str(@con2)
	close tp
	deallocate tp --liberarlo de la memoria
