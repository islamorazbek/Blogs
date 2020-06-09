import React, { useContext } from 'react';
import {StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ( {navigation} ) => {

    const { addBlogPost } = useContext(Context);

    return(
        <BlogPostForm 
            title1='Enter Name'
            title2='Enter Content'
            initalName=''
            initialContent=''
            onSubmit={(title, content)=> {
                addBlogPost(title, content, () => navigation.navigate('Index'));
            }}
        
        />
    );
};

const styles = StyleSheet.create({

});

export default CreateScreen;