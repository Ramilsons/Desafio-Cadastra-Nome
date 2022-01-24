function InputForm(props){
    return(
        <>
            <label htmlFor={props.labelInput}>{props.labelInput+':'}</label>
            <input type={props.typeInput} name={props.labelInput} id={props.labelInput} />
        </>
    )
}

export default InputForm;