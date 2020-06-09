import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ( {navigation} ) => {

    const { state, editBlogPost } = useContext(Context);

    const id = navigation.getParam('id');
    const blogPost = state.find(
        (eachBlogPost) => eachBlogPost.id === id
    );

    return (
        <BlogPostForm 
            title1='Enter New Name'
            title2='Enter New Content'
            initalName={blogPost.title}
            initialContent={blogPost.content}
            onSubmit={ (newTitle, newContent) => editBlogPost(
                id, newTitle, newContent, ()=> navigation.pop()
                )}
        />
    );
}

const styles = StyleSheet.create({

});

export default EditScreen;