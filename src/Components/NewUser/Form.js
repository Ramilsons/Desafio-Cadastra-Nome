import LabelInput from './LabelInput';
import Button from './Button';
import { useState, useRef } from 'react';

import './Form.module.css';
import Modal from './Modal';

function Form(props){ 
    const enteredNameRef = useRef();
    const enteredAgeRef = useRef();

    const[error, setError] = useState();

    function sendFormHandler(event){
        event.preventDefault();

        const enteredName = enteredNameRef.current.value;
        const enteredAge = enteredAgeRef.current.value;

        if(enteredName.trim().length === 0){
            setError({
                title: 'Insira o nome!',
                message: 'Não é permitido valores vazios nesse campo'
            })

            return;
        }
        if(Number(enteredAge) <= 0){
            setError({
                title: 'Sério mesmo que sua idade é essa? 🤔',
                message: 'Vamos lá! Adicione uma idade válida, ou seja, maior que 1'
            })

            return;
        }

        props.onSaveUser({
            id: Math.random(),
            name: enteredName,
            age: enteredAge
        });

        // reset
        enteredNameRef.current.value = '';
        enteredAgeRef.current.value = '';
    }

    function errorHandler(){
        setError(null);
    }

    return(
        <>
            { error ? <Modal title={error.title} message={error.message} confirmFunction={errorHandler} /> : ''}
            <form type="submit" onSubmit={sendFormHandler}>
                <LabelInput forElement="name">Nome: </LabelInput>
                <input ref={enteredNameRef}  type="text" id="name" name="name" />
                <LabelInput forElement="age">Idade: </LabelInput>
                <input ref={enteredAgeRef} type="number" id="age" name="age" min="0" />

                <Button>Adicionar Usuário</Button>
            </form>
        </>
    )
}

export default Form;