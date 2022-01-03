notifica errores posibles en el codigo
sintaxis:

create procedure xd(@ajuste numeric(8,2), @cod int))
as begin
	BEGIN TRANSACTION
	SAVE TRANSACTION puntosalvado;
	--codigo
	BEGIN TRY --bloque donde puede ocurrir errores
		--codigo
		COMMIT TRANSACTION -- fin de la grabacion y graba todos los cambiso
	END TRY --
	BEGIN CATCH --bloque donde se gestionan los errores
		if @@TRANSCOUNT > 0
			ROLLBACK TRANSACTION puntosalvado --fin de la transaccion y deshacerse de los cambios hasta el punto de salvado
	END CATCH
end
