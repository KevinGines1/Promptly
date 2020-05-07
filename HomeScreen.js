import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.screenHeader}>Home Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        justifyContent:'flex-start'
    }, 
    screenHeader:{
        padding:20,
        fontFamily:'Arial',
        fontSize:20,
    }
})