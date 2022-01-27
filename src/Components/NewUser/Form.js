import LabelInput from './LabelInput';
import Button from './Button';
import { useState } from 'react';

import style from './Form.module.css';
import Modal from './Modal';

function Form(props){ 
    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState(0);
    const[error, setError] = useState();

    function inputNameChangedHandler(event){
        setEnteredName(event.target.value);
    }

    function inputAgeChangedHandler(event){
        setEnteredAge(event.target.value);
    }

    function sendFormHandler(event){
        event.preventDefault();

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
        setEnteredName('');
        setEnteredAge(0);
    }

    function errorHandler(){
        setError(null);
    }

    return(
        <div>
            { error ? <Modal title={error.title} message={error.message} confirmFunction={errorHandler} /> : ''}
            <form type="submit" onSubmit={sendFormHandler}>
                <LabelInput forElement="name">Nome: </LabelInput>
                <input type="text" onChange={ inputNameChangedHandler } id="name" name="name" value={ enteredName } />
                
                <LabelInput forElement="age">Idade: </LabelInput>
                <input type="number" onChange={ inputAgeChangedHandler } id="age" name="age" min="0" value={ enteredAge } />

                <Button>Adicionar Usuário</Button>
            </form>
        </div>
    )
}

export default Form;