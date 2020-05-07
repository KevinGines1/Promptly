import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Fonts from '../IosFonts.js'

// make this as generic as possible, the display should only depend on the prop/param: display All HW, display This Wk HW, display This Month HW

// the plan here is to create 3 screens where each renders this component but with different data based on the param/props passed
export default function HomeworkList({navigation}){
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