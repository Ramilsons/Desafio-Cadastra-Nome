import style from './Button.module.css';

function Button(props){
    return(
        <button type="submit" onClick={props.clickHandler}>{props.children}</button>
    )
}

export default Button;