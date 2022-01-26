import LabelInput from './LabelInput';
import Button from './Button';
import { useState } from 'react';

import style from './Form.module.css';

function Form(props){ 
    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState(0);

    function inputNameChangedHandler(event){
        setEnteredName(event.target.value);
    }

    function inputAgeChangedHandler(event){
        setEnteredAge(event.target.value);
    }

    function sendFormHandler(event){
        event.preventDefault();

        props.onSaveUser({
            id: Math.random(),
            name: enteredName,
            age: enteredAge
        });
    }

    return(
        <form type="submit" onSubmit={sendFormHandler}>
            <LabelInput forElement="name">Nome: </LabelInput>
            <input type="text" onChange={ inputNameChangedHandler } id="name" name="name" value={ enteredName } />
            
            <LabelInput forElement="age">Idade: </LabelInput>
            <input type="number" onChange={ inputAgeChangedHandler } id="age" name="age" min="0" value={ enteredAge } />

            <Button>Adicionar Usuário</Button>
        </form>
    )
}

export default Form;