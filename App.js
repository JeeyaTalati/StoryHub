import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screen/WriteScreen';
import ReadScreen from './Screen/ReadScreen';
import LoginScreen from './Screen/LoginScreen';
export default class App extends React.Component {
  render(){
    return(
      <AppContainer></AppContainer>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  Write:{screen:WriteScreen},
  Read:{screen:ReadScreen},
},
{
 defaultNavigationOptions:({navigation})=>({
   tabBarIcon:()=>{
     const routeName=navigation.state.routeName
     if (routeName==="Write"){
       return(
         <Image source={require("./assets/book.png")} style={{width:40,height:40}}/>
       )
     }
     else if (routeName==="Read"){
      return(
        <Image source={require("./assets/searchingbook.png")} style={{width:40,height:40}}/>
      )
    }
   }
 })
})
const switchNavigator = createSwitchNavigator({
 LoginScreen:{screen:LoginScreen},
 TabNavigator:{screen:TabNavigator}, 
})
const AppContainer = createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

