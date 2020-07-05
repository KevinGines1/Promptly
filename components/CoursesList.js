import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons';
//redux
import { connect } from 'react-redux'


class CoursesList extends React.Component {
    render() {
        const courses = this.props.courses
        return (
            <View style={styles.listContainer}>
            <Text style={styles.header}>Courses:</Text>
            <FlatList 
                ListEmptyComponent={() => (
                    <View>
                        <Text style={styles.listItemTitle}>None</Text>
                    </View>
                )}
                data={courses}
                renderItem={({item, index})=>(
                    <TouchableOpacity key={index} style={styles.itemHolder} onPress = {()=>this.props.navigation.navigate('CourseHW', {course: item.course})}>
                        <Text style={styles.listItem}><Entypo name="open-book" size={25} color="black" /> {item.course}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}

            />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    listItem:{
        margin: 1,
        fontSize: 30,
    },
    itemHolder:{
        flex:1,
        justifyContent:'space-between',
        width:400,
    },
    listContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    header:{
        padding: 20,
        fontFamily: "Arial",
        fontSize: 20,
    }
})

const mapStateToProps = state => {
    return {
        courses : state.courses
        // username: state.username,
        // homeworks: state.homeworks,
        // homeworksThisMonth: state.homeworksThisMonth
    }
}

// export default CoursesList
// export default connect(null, { getCoursesAsync })(CoursesList)
// export default connect(mapStateToProps, { getAllHomeworksAsync, getHomeworksThisMonthAsync })(CoursesList)
export default connect(mapStateToProps)(CoursesList)