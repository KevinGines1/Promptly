import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen.js'

//redux
import { connect } from 'react-redux'
import {
    getAllHomeworksAsync,
    getMonthHomeworksAsync,
    getWeekHomeworksAsync,
    getCoursesAsync,
    getStudentInfoAsync
} from '../redux/actions'

class HomeTab extends React.Component {

    async componentDidMount() {
        // you should only do this when the user is logged in
        await this.props.getAllHomeworksAsync(this.props.username)
        await this.props.getMonthHomeworksAsync(this.props.username)
        await this.props.getWeekHomeworksAsync(this.props.username)
        await this.props.getCoursesAsync(this.props.username)
        await this.props.getStudentInfoAsync(this.props.username)
    }

    render() {
        const HomeStack = createStackNavigator(); // solely for the header
        return (
            // <HomeStack.Navigator
            <HomeStack.Navigator
                screenOptions={{
                    headerTitle: 'Prompt.ly',
                    headerStyle: { backgroundColor: 'orange', height: 125 },
                    // headerTitleStyle:{fontSize:40, color:'white', fontFamily:'Chalkduster'}
                    headerTitleStyle: { fontSize: 50, color: 'white', fontFamily: 'Noteworthy' }
                }}>
                <HomeStack.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </HomeStack.Navigator>
        )
    }
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

const mapStateToProps = state => {
    return {
        username: state.user.username
    }
}
export default connect(mapStateToProps, { getAllHomeworksAsync, getMonthHomeworksAsync, getWeekHomeworksAsync, getCoursesAsync, getStudentInfoAsync })(HomeTab)