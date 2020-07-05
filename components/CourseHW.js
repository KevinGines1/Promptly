import React from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Button} from 'react-native'
import { CheckBox } from 'react-native-elements'
import RenderList from './RenderList'

//redux
import {connect} from 'react-redux'
import {getCourseHWAsync} from '../redux/actions'

class CourseHW extends React.Component{
    
    async componentDidMount(){
        await this.props.getCourseHWAsync(this.props.username, this.props.route.params?.course)
    }

    render(){
        const course = this.props.route.params?.course
        const homeworks = this.props.listOfHWInCourse
        return(
            <View style={styles.container}>
                <Text style={styles.screenHeader}>Homeworks for {course}:</Text>

                <FlatList
                    ListEmptyComponent={() => (
                        <View>
                            <Text style={styles.listItemTitle}>None</Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    data={homeworks}
                    renderItem={({ item }) => ( 
                        <RenderList item={item}/>                        
                    )}
                    keyExtractor={(item) => item.assignment_id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    screenHeader: {
        padding: 20,
        fontFamily: "Arial",
        fontSize: 20,
    },
    listContainer: {
        margin: 7,
        flex: 1,
        width: 400,
        alignItems: "flex-start",
    },
    listItemTitle: {
        margin: 1,
        fontWeight: "bold",
        fontSize: 23,
    },
    separator: {
        margin: 0,
        height: 2,
        backgroundColor: "orange",
    },
})

const mapStateToProps = state =>{
    return{
        courseHW : state.courseHW,
        username : state.username,
        listOfHWInCourse : state.courseHW
    }
}

export default connect(mapStateToProps, {getCourseHWAsync})(CourseHW)