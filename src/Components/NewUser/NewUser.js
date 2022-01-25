import Form from './Form';

function NewUser(props){
    return(
        <section>
            <Form onSaveUser={props.onSaveUser}/>
        </section>
    )
}

export default NewUser;