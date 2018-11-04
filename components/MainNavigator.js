import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import Decks from './Decks'
import NewDeck from './NewDeck'
import DeckDetail from './DeckDetail'
import NewQuestion from './NewQuestion'
import Quiz from './Quiz'

import { white, black, gray } from '../utils/colors'

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

export const MainNavigator = createStackNavigator({
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