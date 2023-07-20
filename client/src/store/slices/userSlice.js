import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        users: {},
        user: {},
        oneUserTest: {},
        isAuth: false,
    },
    reducers: {
        setUsers: (state,action)=> {
            state.users = action.payload
        },
        setUser: (state,action)=> {
            state.user = action.payload
        },
        setOneUserTest: (state,action)=> {
            state.oneUserTest = action.payload
        },
        setIsAuth: (state,action) => {
            state.isAuth = action.payload
        }
    }
})

export const {setUser,setIsAuth,setUsers,setOneUserTest} = userSlice.actions

export default userSlice.reducer