import InputForm from './InputForm';
import Button from './Button';

function Form(){
    return(
    <form type="submit">
        <InputForm typeInput="text" labelInput="name" />
        <InputForm typeInput="number" labelInput="age" min="0" />
        <Button />
    </form>
    )
}

export default Form;