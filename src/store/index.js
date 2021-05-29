import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import usersReducers from './reducers/usersReducers'

export default configureStore ({
    reducer: {
        users: usersReducers, //name is same of usersReducers
    },
    middleware: [...getDefaultMiddleware(), ]
})