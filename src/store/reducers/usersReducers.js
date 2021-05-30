import {createSlice} from '@reduxjs/toolkit'
import {getUsers, getUser} from '../actions/userActions'



const usersReducers = createSlice({
    name: 'usersReducers',
    initialState: {
        // key
        // users: [
        //     {id: 1, name: 'Raj Vai'},
        //     {id: 2, name: 'Bilal Vai'},
        // ]
        // for bulk users
        users: [],
        // if no user found
        usersContainer: [],

        loader: false,
        errors: {},
        // for single user
        user: {},
    },

    // normal actions create here 
    reducers: {
        // actions here
        // state = initialState
        addUser: (state, action) => {
            // console.log('action', action);
            // add and copy
            state.users = [...state.users, action.payload];
        },

        // for user filter
        filteredUser: (state, action) => {
            // filter
            // state.users = state.users.filter(
            //     (user) => user.name.toLowerCase().includes(action.payload)
            // );
            // if no user found with users
            state.users = state.usersContainer.filter(
                (user) => user.name.toLowerCase().includes(action.payload)
            );

        },
    },

    // for api get data AsyncThunk create promises here
    // Async actions create here 
    extraReducers: {
        // pending promise
        [getUsers.pending]: (state, action) => {
            state.loader = true;
        },
        // fulfilled promise
        [getUsers.fulfilled]: (state, action) => {
            state.loader = false;
            // response.data accessed
            state.users = action.payload;
            // if no user found
            state.usersContainer = action.payload;
        },
        // rejected promise error
        [getUsers.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        },
        // ------------------------------ //

        // pending promise
        [getUser.pending]: (state, action) => {
            state.loader = true;
        },
        // fulfilled promise
        [getUser.fulfilled]: (state, action) => {
            state.loader = false;
            // response.data accessed
            state.user = action.payload;
        },
        // rejected promise error
        [getUser.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload;
        },

    },
});

export const {addUser, filteredUser} = usersReducers.actions;


export default usersReducers.reducer






























