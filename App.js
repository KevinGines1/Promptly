import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeTab from './screens/HomeTab.js'
import CoursesScreen from './screens/CoursesScreen.js'
import AddScreen from './screens/AddScreen.js'
import SearchScreen from './screens/SearchScreen.js'
import ProfileScreen from './screens/ProfileScreen.js'
import Ionicons from '@expo/vector-icons/Ionicons'

//redux
import {Provider} from 'react-redux'
import store from './redux/store'

class App extends React.Component {

  
  render(){
    const Tabs = createBottomTabNavigator();
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tabs.Navigator mode="modal"
            initialRouteName="HomeTab"
            screenOptions={({route}) =>({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'Home') {
                  iconName = 'ios-home'
                } else if (route.name === 'Profile') {
                  iconName = 'ios-person'
                } else if (route.name === 'Courses'){
                  iconName = 'ios-school'
                } else if (route.name === 'Search'){
                  iconName = 'ios-search'
                } else if (route.name === 'Add Homework'){
                  iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline'
                }
  
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
              activeTintColor: 'orange'
            }}
          >
              <Tabs.Screen
                name="Home"
                component={HomeTab}
              />
              <Tabs.Screen
                name="Courses"
                component={CoursesScreen}
              />
              <Tabs.Screen
                name="Add Homework"
                component={AddScreen}
              />
              <Tabs.Screen
                name="Search"
                component={SearchScreen}
              />
              <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
              />
          </Tabs.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = state => {
  // return {
    // username : state.username
  // }
// }

// export default connect(mapStateToProps, { getAllHomeworksAsync, getAllHomeworksMonth})(App)
export default App
