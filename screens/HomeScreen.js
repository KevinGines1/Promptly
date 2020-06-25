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

class HomeScreen extends React.Component{

    render(){
        const HomeTopTabs = createMaterialTopTabNavigator();
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
                    initialParams={{filter: "all"}}
                />
                <HomeTopTabs.Screen
                    name="This Week's Homeworks"
                    component={HomeworkList}
                    initialParams={{ filter: "this week" }}
                />
                <HomeTopTabs.Screen
                    name="This Month's Homeworks"
                    component={HomeworkList}
                    initialParams={{ filter: "this month" }}
                />
            </HomeTopTabs.Navigator>
        )
    }
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

const mapStateToProps = state => {
    return {
        username : state.username
    }
}
 export default HomeScreen