import styles from './User.module.css';

function ShowUsers(props){
    function deleteUserHandler(e){
        props.onDeleteUser(e.target.attributes['data-id'].value);
    }

    return(
        <div className={styles.div}>
            {props.data.map((user)=>{ return <h2 key={user.id} data-id={user.id} onClick={deleteUserHandler}>{user.name}{', '+user.age + ' anos'}</h2> })}
        </div>
    )
}

export default ShowUsers;