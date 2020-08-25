import * as React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import AddHomeWorkInput from '../components/AddHomeWorkInput.js'
import HomeWorkAdded from '../components/HomeWorkAdded.js'

export default function AddScreen({ navigation }) {

    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTitle: 'Prompt.ly',
                headerStyle: { backgroundColor: 'orange', height: 125 },
                // headerTitleStyle:{fontSize:40, color:'white', fontFamily:'Chalkduster'}
                headerTitleStyle: { fontSize: 50, color: 'white', fontFamily: 'Noteworthy' }
            }}
            initialRouteName={"Add Homework"}
        >
            {/* <AddHomeWorkInput/> */}
            <HomeStack.Screen name="Add Homework" component={AddHomeWorkInput} />
            <HomeStack.Screen
                name="Homework Added" component={HomeWorkAdded}
                options={{
                    headerLeft: null
                }}
            />
        </HomeStack.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screenHeader: {
        padding: 20,
        fontFamily: 'Arial',
        fontSize: 20,
    }
})