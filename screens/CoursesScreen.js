import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Fonts from '../IosFonts.js'
import CoursesList from '../components/CoursesList'
import CourseHW from '../components/CourseHW'

//redux
import { connect } from 'react-redux'
import { getCoursesAsync } from '../redux/actions'

class CoursesScreen extends React.Component {

    async componentDidMount() {
        await this.props.getCoursesAsync(this.props.username)
    }
    render() {
        const HomeStack = createStackNavigator();
        return (
            <HomeStack.Navigator
                screenOptions={{
                    headerTitle: 'Prompt.ly',
                    headerStyle: { backgroundColor: 'orange', height: 125 },
                    // headerTitleStyle:{fontSize:40, color:'white', fontFamily:'Chalkduster'}
                    headerTitleStyle: { fontSize: 50, color: 'white', fontFamily: 'Noteworthy' }
                }}
            >
                <HomeStack.Screen name="CoursesList" component={CoursesList} />
                <HomeStack.Screen name="Fonts" component={Fonts} />
                <HomeStack.Screen name="CourseHW" component={CourseHW} />
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
        username: state.username
    }
}


// export default CoursesScreen
export default connect(mapStateToProps, { getCoursesAsync })(CoursesScreen)