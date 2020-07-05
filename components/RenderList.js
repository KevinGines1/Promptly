import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native'
import {CheckBox} from 'react-native-elements'
//redux
import {connect} from 'react-redux'
import {markAsDone, markAsUndone, removeHomeworkAsync} from '../redux/actions'

class RenderList extends React.Component{

    toggleCheckbox = (homeworkID, progress) =>{
        if (progress === "not done") {
            // console.log("inside mark as done function ", homeworkID)
            this.props.markAsDone(homeworkID, this.props.username)
        } else {
            // console.log("inside mark as not done function ", homeworkID)
            this.props.markAsUndone(homeworkID, this.props.username)

        }
    }
    render(){
        const item = this.props.item
        return(
            <TouchableOpacity
                key={item.assignment_id}
                style={styles.listContainer}
            >
                <CheckBox
                    size={24}
                    checked={item.progress === "not done" ? false : true}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={styles.checkbox}
                    title={item.assignment_title}
                    textStyle={styles.listItemTitle}
                    onIconPress={() => {
                        this.toggleCheckbox(item.assignment_id, item.progress);
                    }}
                />

                <Text style={styles.listItemContent}>{item.description}</Text>
                <Text style={styles.listItemContent}>
                    Progress: {item.progress}
                </Text>
                <Text style={styles.listItemContent}>
                    Course : {item.course}
                </Text>
                <Text style={styles.duedate}> Due Date: {item.due_date}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => {
                            this.props.removeHomeworkAsync(item.assignment_id);
                        }}
                        title="Remove"
                        style={styles.removeBtn}
                    />
                </View>
            </TouchableOpacity>
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
    listItemContent: {
        marginLeft: 20,
        fontSize: 15,
    },
    listTextContainer: {
        flex: 1,
    },
    buttonContainer: {
        marginLeft: 10,
        flexDirection: "row",
        flex: 1,
    },
    duedate: {
        marginLeft: 17,
        color: "red",
    },
    separator: {
        margin: 0,
        height: 2,
        backgroundColor: "orange",
    },
    checkbox: {
        margin: 0,
        width: 375
    },
    dropDown: {
        height: 40,
        position: 'relative',
    },
})

const mapStateToProps = state =>{
    return{
        username : state.username,
        homeworksAll: state.homeworks,
        homeworksThisMonth: state.homeworksThisMonth,
        homeworksThisWk: state.homeworksThisWk
    }
}

export default connect(mapStateToProps, {markAsDone, markAsUndone, removeHomeworkAsync})(RenderList) 