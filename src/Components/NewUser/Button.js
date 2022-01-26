import style from './Button.module.css';

function Button(props){
    return(
        <button type="submit">{props.children}</button>
    )
}

export default Button;