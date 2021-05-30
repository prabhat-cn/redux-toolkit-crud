import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Avatar from 'react-avatar'
import { Button, Modal } from 'antd'

const User = ({index, user}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

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
        <Modal title="View Department" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h2>{singleDepartment.name}</h2>
        </Modal>
        <tr key={index}>
            <td>{index+1}</td>
            <td>
            <Avatar className="mr-2" name={user.name} size="45" round={true} /> &nbsp;
            {user.name}
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td><Link to={`/user/${user.id}`}className="btn btn-outline-success">Details</Link></td>
            <td>
                <Button type="primary"
                onClick={() => viewDetail(user._id)}>
                Details Model
                </Button>
            </td>
        </tr>
        </>
    )
}

export default User
