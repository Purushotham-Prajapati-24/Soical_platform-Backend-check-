import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],

}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            state.posts = action.payload
        },
        addPost: (state, action) => {
            state.posts.push(action.payload)
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
        updatePost: (state, action) => {
            state.posts = state.posts.map((post) => post.id === action.payload.id ? action.payload : post)
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const { fetchPosts,addPost, deletePost, updatePost,setActiveTab } = postSlice.actions
export default postSlice.reducer