import Button from './Button';
import style from './Modal.module.css';

function Modal(props){
    return(
        <div>
            <div className={style.backdrop} onClick={props.confirmFunction} />
            <section className={style.modal}>
                <header className={style.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={style.content}>
                    <p>
                        {props.message}
                    </p>
                </div>
                <footer className={style.actions}>    
                    <Button  clickHandler={props.confirmFunction}>Fechar</Button>
                </footer>
            </section>
        </div>
    )
}

export default Modal;