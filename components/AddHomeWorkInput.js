import React from 'react'
import { View, TextInput, Text, Button, KeyboardAvoidingView, StyleSheet } from 'react-native'

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
    }

    handleTitleChange = event => {
        this.setState({ title: event })
    }
    handleDescChange = event => {
        this.setState({ description: event })
    }
    handleDueChange = event => {
        this.setState({ due_date: event })
    }
    handleCourseChange = event => {
        this.setState({ course: event })
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
        })


    }


    render() {
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
                    placeholder="Due date"
                    name="due_date"
                    value={this.state.due_date}
                    onChangeText={this.handleDueChange}
                />
                <TextInput
                    style={styles.inputField}
                    placeholder="Class/Course"
                    name="course"
                    value={this.state.course}
                    maxLength={10}
                    onChangeText={this.handleCourseChange}
                />
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
        width: 400,
        height: 50,
        textAlign: 'center',
    },
})

const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
    }
}



export default connect(mapStateToProps, { addHomeworkAsync })(AddHomeWorkInput)