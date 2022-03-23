function evento(props) {
    const onClickButton = () => {
        alert("");
    }

    const onChange = (event) => {
        console.log(event.target.value)
    }

	return(
		<div>
            <input type="text" onChange={onChange}>
            </input>
        <button className="" onClick={onClickButton}>
        </button>
        </div>
	)
}