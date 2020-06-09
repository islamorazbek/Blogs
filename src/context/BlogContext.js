import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload.id);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                ? action.payload 
                : blogPost;
                
            });
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const responce = await jsonServer.get('/blogPosts');
        // response.data = [{}, {}, {}]
        dispatch({ type: 'get_blogposts', payload: responce.data });
    };

};

const addBlogPost = () => {
    return async (title, content, callback) => {

        await jsonServer.post('./blogPosts', {title, content});
        
        if(callback){
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: {id} });
    };
};

const editBlogPost = ( dispatch ) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogPosts/${id}`, { title, content });

        dispatch({ type: 'edit_blogpost', payload: {id, title, content} });
        if(callback){
            callback();
        }

    };
};

export const { Context, Provider } = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
    []
); 