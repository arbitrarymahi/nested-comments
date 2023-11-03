import { createSlice } from '@reduxjs/toolkit';
import { post } from '../../config';
const initialState = {
post: post,
}
const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        updateComments :(state, {payload})=>{
            state.post = payload
        }
    }
})

export const {updateComments} = commentSlice.actions
export default commentSlice.reducer;