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

export default function App() {

  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator 
        initialRouteName="HomeTab"
        screenOptions={({route}) =>({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
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
            name="HomeTab"
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
