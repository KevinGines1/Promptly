import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

//redux
import { connect } from 'react-redux'
import { getAllHomeworksAsync, getMonthHomeworksAsync, getWeekHomeworksAsync } from '../redux/actions'

class HomeWorkAdded extends React.Component {

    goHome = async () => {
        await this.props.getAllHomeworksAsync(this.props.username)
        await this.props.getMonthHomeworksAsync(this.props.username)
        await this.props.getWeekHomeworksAsync(this.props.username)
        this.props.navigation.navigate("Home")
        this.props.navigation.popToTop()
    }

    render() {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>Homework added!</Text>
                <Button onPress={this.goHome} title="Go to home" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

// export default HomeWorkAdded
export default connect(mapStateToProps, {
    getAllHomeworksAsync, getMonthHomeworksAsync, getWeekHomeworksAsync
})(HomeWorkAdded)