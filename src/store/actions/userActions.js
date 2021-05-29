// to call api data
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
// call back

// to get all users
export const getUsers = createAsyncThunk('users', async () => {
    // users/pending
    // users/fulfilled
    // users/rejected
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    // inside of ** data kept result users data
    return response.data;
});

// pending promise go to reducer
// fulfilled promise go to reducer
// rejected promise go to reducer

// to get user data by id
export const getUser = createAsyncThunk('user', async (id) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    // inside of ** data kept result users data
    return response.data;
});