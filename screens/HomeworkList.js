import React, {useState, useEffect} from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Fonts from '../IosFonts.js'

// make this as generic as possible, the display should only depend on the prop/param: display All HW, display This Wk HW, display This Month HW

export default function HomeworkList({navigation}, props){
    const [homework, setHomework] = useState({
        listOfHomeworks:[],
    })

    // useEffect = () =>{
    //     if(props.homework){
    //         setHomework({
    //             listOfHomeworks: [...listOfHomeworks, props.homework]
    //         })
    //     }
    // }
    return(
        <View style={styles.container}>
            <Text style={styles.screenHeader}>Homeworks List Screen</Text>
        </View>
        // <Fonts/>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }, 
    screenHeader:{
        padding:20,
        fontFamily:'Arial',
        fontSize:20,
    }
})