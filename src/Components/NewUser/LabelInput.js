import style from './LabelInput.module.css';

function LabelInput(props){
    return(
        <label htmlFor={props.forElement}>{props.children}</label>
    )
}

export default LabelInput;