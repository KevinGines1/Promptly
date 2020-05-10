import * as React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HomeworkList from './HomeworkList.js'


// screenOptions={{
//     headerStyle:{backgroundColor:'orange', height:75},
//     headerTitle:"Prompt.ly",
//     headerTintColor:'white',
//     headerTitleStyle:{fontSize:30, fontFamily:'Arial'}
//   }}

export default function HomeTab({navigation}){

    const HomeTopTabs = createMaterialTopTabNavigator();
// the plan for the top tabs is to just pass the prop that is applicable to the name: All Homeworks, Homeworks due this week, Homeworks due this month
    return(
        <HomeTopTabs.Navigator
        screenOptions={{
                    headerTitle: 'Prompt.ly',
                    headerStyle:{backgroundColor:'orange', height:125},
                    headerTitleStyle:{fontSize:50, color:'white', fontFamily:'Noteworthy'}
                }}>
            <HomeTopTabs.Screen
                name="All Homeworks"
                component={HomeworkList}
            />
            <HomeTopTabs.Screen
                name="This Week's Homeworks"
                component={HomeworkList}
            />
            <HomeTopTabs.Screen
                name="This Month's Homeworks"
                component={HomeworkList}
            />
        </HomeTopTabs.Navigator>
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