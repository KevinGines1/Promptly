import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeworkList from './HomeworkList.js' // placeholder, this should be a form for searching
import Fonts from '../IosFonts.js'

export default function SearchScreen({navigation}){
    
    const HomeStack = createStackNavigator();
    
    return(
        <HomeStack.Navigator 
            screenOptions={{
                headerTitle: 'Prompt.ly',
                headerStyle:{backgroundColor:'orange', height:125},
                // headerTitleStyle:{fontSize:40, color:'white', fontFamily:'Chalkduster'}
                headerTitleStyle:{fontSize:50, color:'white', fontFamily:'Noteworthy'}
            }}    
        >
            <HomeStack.Screen name="Fonts" component={Fonts} />
            {/* <HomeStack.Screen name="All Homeworks" component={HomeworkList}/> */}
        </HomeStack.Navigator>
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