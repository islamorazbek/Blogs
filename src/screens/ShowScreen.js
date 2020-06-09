import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {Context} from '../context/BlogContext';

import { Feather } from '@expo/vector-icons'; 

const ShowScreen = ( {navigation} ) => {

    const {state} = useContext(Context);

    const blogPost = state.find(
         (eachBlog) => eachBlog.id === navigation.getParam('id')
    );
     
    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.id}>ID: {blogPost.id}</Text>
            <Text style={styles.text}>Here should be some text about this post haha</Text>
            <Text style={styles.text}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ( {navigation} ) => {
    return{
        headerRight: 
            <TouchableOpacity 
                onPress={() => {
                navigation.navigate('Edit', {id: navigation.getParam('id')});
            }}>
                <Feather name="edit-2" style={styles.iconEdit}/>
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    title: {
        margin: 15,
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    id: {
        marginHorizontal: 15,
        fontStyle: 'italic',
        color: 'grey',
    },
    text: {
        margin: 15,
        fontSize: 18,
    },
    iconEdit: {
        fontSize: 30,
        marginRight: 15,
        color: 'black'
    }
});

export default ShowScreen;