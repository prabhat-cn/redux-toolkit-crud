import React from 'react'
import {Link} from 'react-router-dom'

import Avatar from 'react-avatar'

const User = ({index, user}) => {

    return (
        // <tr key={user.id}>
        <>
        <tr key={index}>
            <td>{index+1}</td>
            <td>
            <Avatar className="mr-2" name={user.name} size="45" round={true} /> &nbsp;
            {user.name}
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><Link to={`/user/${user.id}`} className="btn btn-outline-success">Details</Link></td>
            <td>
            </td>
        </tr>
        </>
    )
}

export default User
