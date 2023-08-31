import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers} from '../store/users/usersSlice';

function Users() {
    
    const {users, isLoading, error} = useSelector((store) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    if (isLoading) {
        return <div><h1 style={{color:"green"}}>Looding ...</h1></div>
    }
    if (error) {
        return <div><h1>Ooops, Error Occur</h1></div>
    }

  return (
       <ul>
            {users.map((user) => (
                <li style={{color:'blue'}} key={user.name.last}>{user.name.first}, {user.name.last}</li>
            ))}
       </ul>
  )
};

export default Users;