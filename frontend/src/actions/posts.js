import * as api from '../api'

// Action Creators 

export const getPosts = () => async (dispatch) => {
    try {
        const { data : posts } = await api.fetchPosts();
        
        dispatch({ type : "FETCH_ALL", payload: posts});
    } catch (error) {
        console.log(error.message);
    }

}