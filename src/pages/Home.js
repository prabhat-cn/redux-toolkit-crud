import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
// data coming from api 
// coming from userActions.js
import {getUsers} from '../store/actions/userActions'
import Loading from '../components/Loading'
import User from '../components/User'
import Filter from '../components/Filter'

const Home = () => {

    const {users, loader} = useSelector((state) => state.users);
    console.log('user', users);
    // to dispatch actions
    const dispatch = useDispatch()

    useEffect(() => {
        // api data called
        dispatch(getUsers());
    }, []);

    return(
        
        
    !loader ? (
    <>
        <Filter />
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#Sl.no</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
            {/* 'index' for itiration 1, 2, 3 value for each for #Sl.no*/}

                {users.map((user, index) => (
                    <User key={index} index={index} user={user} />
                    // <User key={user.id} index={index} user={user} />

                ))}
            </tbody>

        </table>
    </>
    ) : (<Loading />)

    )

}

export default Home
