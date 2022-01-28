import ReactDOM from 'react-dom';

import Button from './Button';
import style from './Modal.module.css';


function Backdrop(props){
    return(
        <div className={style.backdrop} onClick={props.confirmFunction} />
    )
};

function ModalOverlay(props){
    return(
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
    )
};

function Modal(props){
    return(
        <>
            {
                ReactDOM.createPortal(<Backdrop confirmFunction={props.confirmFunction}/>, document.getElementById('backdrop-portal'))
            }
            {
                ReactDOM.createPortal(
                    <ModalOverlay 
                        title={props.title} 
                        message={props.message} 
                        confirmFunction={props.confirmFunction} 
                    />, document.getElementById('modal-portal'))
            }
            
        </>
    )
}

export default Modal;