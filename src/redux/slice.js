import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("getData",
    async(param,{dispatch}) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users",
        {params: param})
        dispatch(getUsers(response?.data))
        console.log(response)
    }
)

const state = {
    data: [],
}


const reducer = createSlice({
    name: "usersSlice",
    initialState: state,
    reducers: {
        getUsers(state, action)  {
            state.data = action.payload
}
    }

})
export default reducer.reducer
export const {getUsers} = reducer.actions