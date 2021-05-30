import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
// coming from userActions.js
import {getUser} from '../store/actions/userActions'

import Avatar from 'react-avatar'
import { Button, Modal } from 'antd';
// import API from '../api';

const User = ({index, user}) => {

    const [singleUser, setSingleUser] = useState({name: '', id: ''});
    const [isModalVisible, setIsModalVisible] = useState(false);

    // const getUserId = async (id) => {
    //     try{
    //       const userData = await API.get(`/users/${id}`);
    //       console.log('userData-data', userData.data);
    //       setSingleUser(userData.data);
    //       showModal();
    //     }catch(error){
    //       console.log(error.message);
    //     }
    // };

    // // "id" is same as route
    const {id} = useParams();
    const dispatch = useDispatch();
    // always use reducer name "users"
    const {userData} = useSelector((state) => state.users);
    console.log('userData', userData);

    useEffect(() => {
        dispatch(getUser(id));
        showModal();
    }, [])

    const viewDetail = (id) => {
        getUser(id);
    }

    const showModal = () => {
    setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

    return (
        // <tr key={user.id}>
        <>
        <Modal title="View User" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <h2>P</h2>
        {/* <h2>{userData.name}</h2> */}
        </Modal>
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
            <Button type="btn btn-primary" onClick={() => viewDetail(user.id)}>
                View Details
            </Button>
            </td>
        </tr>
        </>
    )
}

export default User
