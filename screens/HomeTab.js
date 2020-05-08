import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import HomeworkList from './HomeworkList.js'
import HomeScreen from './HomeScreen.js'


// screenOptions={{
//     headerStyle:{backgroundColor:'orange', height:75},
//     headerTitle:"Prompt.ly",
//     headerTintColor:'white',
//     headerTitleStyle:{fontSize:30, fontFamily:'Arial'}
//   }}

export default function HomeTab({navigation}){

    const HomeStack = createStackNavigator(); // solely for the header
    const HomeTopTabs = createMaterialTopTabNavigator();

    return(
        <HomeStack.Navigator
        screenOptions={{
                    headerTitle: 'Prompt.ly',
                    headerStyle:{backgroundColor:'orange', height:125},
                    // headerTitleStyle:{fontSize:40, color:'white', fontFamily:'Chalkduster'}
                    headerTitleStyle:{fontSize:50, color:'white', fontFamily:'Noteworthy'}
                }}>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
            />
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