import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native'

//redux
import { connect } from 'react-redux'
// import { getUserInfo } from '../utils/api/user'



class ProfileScreen extends React.Component {
    render() {
        return (
            <View>
                {
                    this.props.user.profile_picture === null ?
                        <AntDesign name="user" size={100} style={styles.profilePic} />
                        :
                        <Text>May profile pic</Text>
                }
                <Text>NAME: {this.props.user.name}</Text>
                <Text>USERNAME: {this.props.user.username}</Text>
                <Text>EMAIL: {this.props.user.email}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePic: {
        color: "grey",
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}



// export default ProfileScreen
export default connect(mapStateToProps)(ProfileScreen)