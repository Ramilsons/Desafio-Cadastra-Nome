import React from 'react';
import {useState} from 'react';

import NewUser from './Components/NewUser/NewUser';
import User from './Components/User/Users';

function App(props) {
	const[usersList, setUsersList] = useState([{id:0.1, name: 'Ramilson', age:'20'}, {id:0.2, name: 'Maria', age:'35'}]);

	function saveUserHandler(userData){
		setUsersList((prevState) => [userData, ...prevState]);
	}

	function deleteUserHandler(id){
		let allUsersAfterDelete = usersList.filter(user => user.id !== Number(id));

		setUsersList(allUsersAfterDelete);
	}

	return (
		<div>
			<NewUser onSaveUser={saveUserHandler}/>
			<User data={usersList} onDeleteUser={deleteUserHandler} />
		</div>
	);
}

export default App;
