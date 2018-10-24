import React from 'react'
import { View, Platform, StatusBar, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'

import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { white, black, gray } from './utils/colors'

import Decks from './components/Decks'
import NewDeck from './components/NewDeck'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createMaterialTopTabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    tintColor: gray,
    activeTintColor: black,
    inactiveTintColor: gray,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
    indicatorStyle: {
      backgroundColor: black
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  NewDeck: {
    screen: NewDeck
  }
}, {
  navigationOptions: {
    header: null,
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar backgroundColor={gray} barStyle='light-content' />
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
