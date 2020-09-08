import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import { CheckBox } from 'react-native-elements'
import RenderList from '../components/RenderList'

//redux
import { connect } from 'react-redux'
import { removeHomeworkAsync, markAsDone, markAsUndone } from '../redux/actions'

class HomeworkList extends React.Component {
  state = {
    username: this.props.username,
    filter: this.props.route.params?.filter,
    inProgressOnly: false
  }

  toggleProgress = () => {
    this.setState((prevState) => ({
      inProgressOnly: !(prevState.inProgressOnly)
    }))
  }
  render() {
    const { filter } = this.state

    const homeworks = filter === "all" ? this.props.homeworksAll :
      filter === "this week" ? this.props.homeworksThisWk : this.props.homeworksThisMonth
    return (
      <View style={styles.container}>
        <Text style={styles.screenHeader}>
          {filter === "all"
            ? "Showing all homeworks: "
            : `Showing homeworks for ${filter}: `}
        </Text>
        <TouchableOpacity onPress={this.toggleProgress} style={styles.toggleProgressFilter}>
          <Text style={styles.toggleTextStyle}>{this.state.inProgressOnly === false ? "Tap here to show unfinished homeworks only" : "Tap here to show unfinished & finished homeworks"}</Text>
        </TouchableOpacity>
        <FlatList
          ListEmptyComponent={() => (
            <View>
              <Text style={styles.listItemTitle}>None</Text>
            </View>
          )}
          // ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={homeworks}
          renderItem={({ item }) => ( // * turn this into a separate component
            <RenderList item={item} inProgressOnly={this.state.inProgressOnly} />
          )}
          keyExtractor={(item) => item.Assignment_id.toString()}
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
    padding: 10,
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    margin: 7,
    flex: 1,
    width: 400,
    alignItems: "flex-start",
  },
  listItemTitle: {
    margin: 1,
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
    width: 375,
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  dropDown: {
    height: 40,
    position: 'relative',
  },
  toggleTextStyle: {
    fontSize: 15,
  }
});

const mapStateToProps = state => {
  return {
    username: state.user.username,
    homeworksAll: state.homeworks,
    homeworksThisMonth: state.homeworksThisMonth,
    homeworksThisWk: state.homeworksThisWk,
    listOfHWInCourse: state.courseHW
  }
}

export default connect(mapStateToProps, { removeHomeworkAsync, markAsDone, markAsUndone })(HomeworkList)