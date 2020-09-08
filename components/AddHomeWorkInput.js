import React from 'react'
import { View, TextInput, Text, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
//redux
import { connect } from 'react-redux'
import { addHomeworkAsync } from '../redux/actions'

class AddHomeWorkInput extends React.Component {

    state = {
        title: '',
        description: '',
        due_date: '',
        course: '',
        school_email: this.props.email,
        username: this.props.username,
        datePickerVisibility: false,
        displayDate: '', // this will be used to display the due date with a different format to due_date
    }

    handleTitleChange = event => {
        this.setState({ title: event })
    }
    handleDescChange = event => {
        this.setState({ description: event })
    }
    handleDueChange = event => {
        // since the component returns a date object
        // we extract first needed info for the database, convert all to string
        const monthNum = event.getMonth() + 1 // month returned on zero indexing (0 = January)
        const month = monthNum.toString()
        const date = event.getDate().toString()
        const year = event.getFullYear().toString()
        const due = year.concat("-", date, "-", month)
        const toDisplay = month.concat("/", date, "/", year)

        this.setState({ due_date: due, displayDate: toDisplay, datePickerVisibility: false })
    }
    handleCourseChange = event => {
        this.setState({ course: event })
    }

    hideDatePicker = () => {
        this.setState({ datePickerVisibility: false })
    }

    showDatePicker = () => {
        this.setState({ datePickerVisibility: true })
    }

    handleFormSubmit = async event => {
        event.preventDefault()
        const homeworkInfo = this.state
        await this.props.addHomeworkAsync(homeworkInfo)
        this.props.navigation.navigate('Homework Added')
        // reset form
        this.setState({
            title: '',
            description: '',
            due_date: '',
            course: '',
            school_email: this.props.email,
            username: this.props.username,
            datePickerVisibility: false
        })
    }

    render() {
        const homeworkDue = this.state.due_date === '' ? "Press to set due date" : String(`Homework is due on: ${this.state.displayDate}`)
        console.log(homeworkDue)
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <Button style={styles.addHWBtn} title="Add Homework" onPress={this.handleFormSubmit} />
                <TextInput
                    style={styles.inputField}
                    placeholder="Homework Title"
                    name="title"
                    value={this.state.title}
                    maxLength={20}
                    onChangeText={this.handleTitleChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Homework Description"
                    name="description"
                    value={this.state.description}
                    // multiline
                    maxLength={100}
                    onChangeText={this.handleDescChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Class/Course"
                    name="course"
                    value={this.state.course}
                    maxLength={10}
                    onChangeText={this.handleCourseChange}
                />
                <Button title={homeworkDue} onPress={this.showDatePicker} />
                <DateTimePickerModal
                    isVisible={this.state.datePickerVisibility}
                    mode="date"
                    onConfirm={this.handleDueChange}
                    onCancel={this.hideDatePicker}
                    headerTextIOS="Set due date"
                />
                {/* <DatePicker
                    value={this.state.due_date}
                    onDateChange={this.handleDueChange}
                    // format="YYYY-DD-MM"
                    mode='date'
                    minDate="2020-26-08"
                    maxDate="2090-31-12"
                // confirmBtnText="Confirm"
                // cancelBtnText="Cancel"
                /> */}

            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputField: {
        margin: 15,
        borderWidth: 1,
        // padding:20,
        width: 250,
        height: 50,
        textAlign: 'center',
    },
})

const mapStateToProps = state => {
    return {
        username: state.user.username,
        email: state.user.email,
    }
}



export default connect(mapStateToProps, { addHomeworkAsync })(AddHomeWorkInput)