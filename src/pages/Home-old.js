import React, {useRef, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addUser} from '../store/reducers/usersReducers'
// data coming from api
import {getUsers} from '../store/actions/userActions'

const Home = () => {
    const state = useSelector((state) => state.users);
    console.log('state', state.users);

    // to dispatch actions
    const dispatch = useDispatch()
    const inputRef = useRef(''); // access value from input field

    const storeUser = (e)=> {
        e.preventDefault();
        console.log('inputRef->', inputRef.current.value);
        // to add input go to payload
        dispatch(addUser(inputRef.current.value));
        // reset after submit
        inputRef.current.value = "";
    }

    useEffect(() => {
        // api data called
        dispatch(getUsers());
    }, [])

    return (
        <>
        <form onSubmit={storeUser}>
            <input type="text" name="" placeholder="Add user..." ref={inputRef} /> <br/><br/>
            <input type="submit" value="Add User" />
        </form>

        <h1>List Users</h1>
        </>
    );
}

export default Home
