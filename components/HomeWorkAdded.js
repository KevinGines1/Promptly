import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

class HomeWorkAdded extends React.Component{

    goHome = () => {
        this.props.navigation.navigate("Home")
    }

    render(){
        return(
            <View style={styles.textContainer}>
                <Text style={styles.text}>Homework added!</Text>
                <Button onPress={this.goHome} title="Go to home"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text : {
        fontSize:40,
    },
    textContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomeWorkAdded