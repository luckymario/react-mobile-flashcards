import React, { Component } from 'react'
import { View, Platform, StatusBar, StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { white, black, gray } from './utils/colors'

import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'

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
    navigationOptions: {
      header: null
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: white
      },
      headerForceInset: {
        top: 'never'
      },
      headerTitleStyle: {
        width: '100%',
        marginLeft: 0
      }
    }
  },
  NewDeck: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: white
      },
      headerForceInset: {
        top: 'never'
      },
      headerTitleStyle: {
        width: '100%',
        marginLeft: 0
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: white
      },
      headerForceInset: {
        top: 'never'
      },
      headerTitleStyle: {
        width: '100%',
        marginLeft: 0
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: gray,
      headerStyle: {
        backgroundColor: white
      },
      headerForceInset: {
        top: 'never'
      },
      headerTitleStyle: {
        width: '100%',
        marginLeft: 0
      }
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={gray} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

export default App