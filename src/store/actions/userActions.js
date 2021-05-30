// to call api data
import {createAsyncThunk} from '@reduxjs/toolkit'
import API from '../../api';



// call back
// to get all users
export const getUsers = createAsyncThunk('users', async () => {
    // users/pending
    // users/fulfilled
    // users/rejected
    const response = await API.get('/users');
    // inside of ** data kept result users data
    return response.data;
});

// pending promise go to reducer
// fulfilled promise go to reducer
// rejected promise go to reducer

// to get user data by id
export const getUser = createAsyncThunk('user', async (id) => {
    const response = await API.get(`/users/${id}`);
    // inside of ** data kept result users data
    return response.data;
});