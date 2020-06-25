import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Fonts from '../IosFonts.js'

//redux
import {connect} from 'react-redux'

// make this as generic as possible, the display should only depend on the prop/param: display All HW, display This Wk HW, display This Month HW

class HomeworkList extends React.Component {
    state = {
        username: this.props.username,
        filter: this.props.route.params?.filter,
    }

    render(){
        const {filter} = this.state

        const homeworks = filter === "all" ? this.props.homeworksAll : 
        filter === "this week" ? this.props.homeworksThisWk : this.props.homeworksThisMonth
        console.log("HOMEWORKS TO RENDER: ", filter, '\n', homeworks)
        return(
            <View style={styles.container}>
                <Text style={styles.screenHeader}>{
                    filter==="all" ? "Showing all homeworks: " : `Showing homeworks for ${filter}: `
                }</Text>
                {homeworks.length === 0 ? <Text>None</Text> : 
                    homeworks.map((hw, i) => {
                        return(
                            <View key={i} style={styles.listContainer}>
                                <Text style={styles.listItemTitle}>{hw.assignment_title}</Text>
                                <Text style={styles.listItemContent}>{hw.description}</Text>
                                <Text style={styles.duedate}> Due Date: {hw.due_date}</Text>
                            </View>
                        )
                    })
                }
            </View>
            // <Fonts/>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    }, 
    screenHeader:{
        padding:20,
        fontFamily:'Arial',
        fontSize:20,
    },
    listContainer:{
        flex:0.5,
        width:400,
        alignItems:'flex-start',
        // backgroundColor:'red'
    },
    listItemTitle:{
        margin:1,
        fontWeight:'bold',
        fontSize:23
        // backgroundColor:'red'
    },
    listItemContent:{
        marginLeft:20,
        fontSize:15
    },
    duedate:{
        color:'red'
    }
})

const mapStateToProps = state =>{
    return{
        username : state.username,
        homeworksAll: state.homeworks,
        homeworksThisMonth : state.homeworksThisMonth,
        homeworksThisWk : state.homeworksThisWk
    }
}

export default connect(mapStateToProps)(HomeworkList)