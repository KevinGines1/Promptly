import React, {useState} from 'react'
import {View, TextInput, Text, Button, KeyboardAvoidingView, StyleSheet} from 'react-native'

export default function AddHomeWorkInput(){
    const [homework, setHomework] = useState({
        title:'',
        // id: 
        description:'',
        duedate:'',
        className:'',
    })

    handleTitleChange = (title) =>{
        setHomework({
            title
        })
    }

    handleDescChange = (description) =>{
        setHomework({
            description
        })
    }

    handleDueChange = (duedate) =>{
        setHomework({
            duedate
        })
    }

    handleClassChange = (className) => {
        setHomework({
            className
        })
    }

    addHomework = () => {

    }
    return(
            <KeyboardAvoidingView behavior="height" style={styles.container} >
                <TextInput
                    style={styles.inputField}
                    placeholder="Homework Title"
                    value={homework.title}
                    onChangeText={handleTitleChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Homework Description"
                    // multiline
                    value={homework.description}
                    onChangeText={handleDescChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Due date"
                    value={homework.duedate}
                    onChangeText={handleDueChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Class"
                    value={homework.class}
                    onChangeText={handleClassChange}
                />
                <Button title="Add Homework"/>
            </KeyboardAvoidingView>

        
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'space-evenly'
    },
    inputField:{
        borderWidth:1,
        // padding:20,
        width:400,
        height:50,
        textAlign:'center',
    }
})