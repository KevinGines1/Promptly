import React from 'react'
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import {CheckBox} from 'react-native-elements'
import RenderList from '../components/RenderList'

//redux
import {connect} from 'react-redux'
import {removeHomeworkAsync, markAsDone, markAsUndone} from '../redux/actions'

class HomeworkList extends React.Component {
    state = {
        username: this.props.username,
        filter: this.props.route.params?.filter,
    }

    // toggleCheckbox = (homeworkID, progress) => {

    //   if(progress==="not done"){
    //     console.log("inside mark as done function ",homeworkID)
    //     this.props.markAsDone(homeworkID, this.props.username)
    //   }else{
    //     console.log("inside mark as not done function ",homeworkID)
    //     this.props.markAsUndone(homeworkID, this.props.username)

    //   }
    // }
    render(){
        const {filter} = this.state

        const homeworks = filter === "all" ? this.props.homeworksAll : 
        filter === "this week" ? this.props.homeworksThisWk : this.props.homeworksThisMonth
        return (
          <View style={styles.container}>
            <Text style={styles.screenHeader}>
              {filter === "all"
                ? "Showing all homeworks: "
                : `Showing homeworks for ${filter}: `}
            </Text>
            <FlatList
              ListEmptyComponent={() => (
                <View>
                  <Text style={styles.listItemTitle}>None</Text>
                </View>
              )}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              data={homeworks}
              renderItem={({ item }) => ( // * turn this into a separate component
                <RenderList item={item} />
              )}
              keyExtractor={(item) => item.assignment_id.toString()}
            />
          </View>
        );
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
    marginLeft:10,
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
    width:375
  },
  dropDown:{
    height:40,
    position:'relative',
  },
});

const mapStateToProps = state =>{
    return{
        username : state.username,
        homeworksAll: state.homeworks,
        homeworksThisMonth : state.homeworksThisMonth,
        homeworksThisWk : state.homeworksThisWk,
        listOfHWInCourse : state.courseHW
    }
}

export default connect(mapStateToProps, { removeHomeworkAsync, markAsDone, markAsUndone})(HomeworkList)