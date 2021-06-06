
import {useParams, Link} from 'react-router-dom'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// coming from userActions.js
import {getUser} from '../store/actions/userActions'

import Loading from '../components/Loading'

const Details = () => {
    // "id" is same as route
    const {id} = useParams();
    const dispatch = useDispatch();
    // always use reducer name "users"
    const {loader, user} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUser(id))
    }, [])
    return (
        !loader ? (
        <>
        <Link to="/" className="btn btn-dark mb-3"> Go Home</Link>
        <div className="card">
            <div className="card-header">
                <h3>
                    <span className="text-info">{user.name}</span> details
                </h3>
            </div>
            <div className="card-body">
                <div className="row mb-2">
                    <div className="col-3">Name</div>
                    <div className="col-9 text-end">{user.name}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Email</div>
                    <div className="col-9 text-end">{user.email}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">User Name</div>
                    <div className="col-9 text-end">{user.username}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Company</div>
                    <div className="col-9 text-end">{user?.company?.name}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">City</div>
                    <div className="col-9 text-end">{user?.address?.city}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Street</div>
                    <div className="col-9 text-end">{user?.address?.street}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Hotel Suite</div>
                    <div className="col-9 text-end">{user?.address?.suite}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Zipcode</div>
                    <div className="col-9 text-end">{user?.address?.zipcode}</div>
                </div>
                <div className="row mb-2">
                    <div className="col-3">Website</div>
                    <div className="col-9 text-end">{user.website}</div>
                </div>
            </div>
        </div>
        </> 
        ) : (<Loading />)
    )
}

export default Details
