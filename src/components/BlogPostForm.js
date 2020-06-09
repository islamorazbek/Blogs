import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const BlogPostForm = ({title1, title2, initalName, initialContent, onSubmit}) => { 
    const [title, setTitle] = useState(initalName);
    const [content, setContent] = useState(initialContent);

    return (
        <View>
            <Text style={styles.titles}>{title1}</Text>
            <TextInput 
                style={styles.input} 
                value={title}
                onChangeText={(text)=>setTitle(text)}
            />
            <Text style={styles.titles}>{title2}</Text>
            <TextInput 
                style={styles.input}
                value={content}
                onChangeText={(text)=>setContent(text)}
            />
            <View style={styles.buttonView}>
                <Button 
                    title='Save' 
                    onPress = {() => onSubmit(title, content)}
                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titles: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        marginHorizontal: 10,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 20
    },
    buttonView: {
        width: '40%',
        alignSelf: 'center',
        margin: 10
    }
});

export default BlogPostForm;