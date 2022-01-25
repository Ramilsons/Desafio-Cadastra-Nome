function ShowUsers(props){
    return(
        <>
            {props.data.map((user)=>{ return <h1 key={user.id}>{user.name}</h1> })}
        </>
    )
}

export default ShowUsers;