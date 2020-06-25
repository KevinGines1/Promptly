import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Fonts from '../IosFonts.js'
import HomeworkList from '../screens/HomeworkList'
//redux
import { connect } from 'react-redux'
import { getAllHomeworksAsync, getHomeworksThisMonthAsync } from '../redux/actions'

// make this as generic as possible, the display should only depend on the prop/param: display All HW, display This Wk HW, display This Month HW

class HomeworkListComponent extends React.Component {
    state = {
        username: this.props.username,
        filter: this.props.route.params?.filter,
        homeworks: []
    }

    // transfer componentDidMount to App.js
    // async componentDidMount() {
    //     // console.log("STATE : ", this.state.filter, "\nHOMEOWKRS: ", this.state.homeworks)
    //     await this.props.getAllHomeworksAsync(this.state.username, this.state.filter)
    //     switch (this.state.filter) {
    //         case 'all':
    //             this.setState({ homeworks: this.props.homeworks })
    //             break
    //         case 'this month':
    //             this.setState({ homeworks: this.props.homeworksThisMonth })
    //             break
    //         default:
    //             console.log("WHY AM I HERE")
    //             this.setState({ homeworks: [] })
    //             break
    //     }
    // }
    render() {
        const { filter, homeworks } = this.state
        // console.log("HOMEWORKS: ", homeworks)
        return (
            <View>
                <Text style={styles.screenHeader}>{
                    filter === "all" ? "Showing all homeworks: " : `Showing homeworks for ${filter}: `
                }</Text>
                <HomeworkList homeworks={filter === "all" ? this.props.homeworks : this.props.homeworksThisMonth} filter={this.state.filter}/>
            </View>
            // <Fonts/>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    screenHeader: {
        padding: 20,
        fontFamily: 'Arial',
        fontSize: 20,
    },
    listContainer: {
        flex: 0.5,
        width: 400,
        alignItems: 'flex-start',
        // backgroundColor:'red'
    },
    listItemTitle: {
        margin: 1,
        fontWeight: 'bold',
        fontSize: 23
        // backgroundColor:'red'
    },
    listItemContent: {
        marginLeft: 20,
        fontSize: 15
    },
    duedate: {
        color: 'red'
    }
})

const mapStateToProps = state => {
    return {
        username: state.username,
        homeworks: state.homeworks,
        homeworksThisMonth: state.homeworksThisMonth
    }
}

export default connect(mapStateToProps, { getAllHomeworksAsync, getHomeworksThisMonthAsync })(HomeworkListComponent)