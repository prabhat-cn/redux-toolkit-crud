import {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {filteredUser} from '../store/reducers/usersReducers'

const Filter = () => {
    const inputRef = useRef('');
    console.log('inputRefII', inputRef);
    const dispatch = useDispatch();
    const filterUsers = () => {
        dispatch(filteredUser(inputRef.current.value));
    }

    return (
        <>
        <input 
            type="text" 
            name="" 
            className="form-control mb-3" 
            placeholder="Search by name.." 
            ref={inputRef}
            onChange={filterUsers}
        />
        </>
    )
}

export default Filter
