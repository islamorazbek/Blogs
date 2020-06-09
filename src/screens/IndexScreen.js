import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import {Context} from '../context/BlogContext';

const IndexScreen = ( {navigation} ) => {
    const {state, deleteBlogPost, getBlogPosts, getLocalData} = useContext(Context);

    useEffect( ()=> {
        getBlogPosts();
        navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

    }, []);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={ ({item}) => {
                    return(
                        <View style={styles.eachBlogStyle}>
                            <TouchableOpacity onPress={()=> navigation.navigate('Show', { id: item.id })}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather name="trash" style={styles.iconDelete}/>
                            </TouchableOpacity>
                        </View>
                    )
                }}            
            />
        </View>
    )
};


IndexScreen.navigationOptions = ( {navigation} ) => {
    return{
        headerRight:
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" style={styles.iconAdd}/>
            </TouchableOpacity>
    }
};

const styles = StyleSheet.create({
    eachBlogStyle:{
        flexDirection: 'row',
        color: 'black',
        justifyContent: 'space-between',
        padding: 10,
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5
    },
    title: {
        fontSize: 18,
    },
    iconDelete: {
        fontSize: 24,
        color: 'black'
    },
    iconAdd: {
        fontSize: 30,
        marginRight: 15,
        color: 'black'
    },
    buttonView: {
        width: '40%',
        alignSelf: 'center',
        margin: 10
    }
});

export default IndexScreen;