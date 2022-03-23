function evento(props) {
    const [estado,setEstado] = React.useState('');
    const [estado1,setEstado1] = React.useState("estado inicial");
    


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