function localStorage(props) {
    const localStorageNew = localStorage.getItem("NOMBRE")
    let parsed;

    if(!localStorageNew){
        localStorage.setItem("NOMBRE",[]);
        parsed = []
    }else {
        parsed = JSON.parse(localStorageNew)
    }

    const saveItem = (newSave) => {
        const stringifiedItem = JSON.stringify(newSave);
        localStorage.setItem("NOMBRE",stringifiedItem)
        setTodo(newSave)
    }

    const onDeleteOrCreateItem = () => {
        // codigo
        let newItems = []; //array de objetos
        saveItem(newItems)
    }

    const onChange = (event) => {
        setEstado(event.target.value);
    }

	return(
		<div>
            <p>{estado}</p>
            <input type="text" onChange={onChange}>
            </input>
        <button className="" onClick={onClickButton}>
        </button>
        </div>
	)
}