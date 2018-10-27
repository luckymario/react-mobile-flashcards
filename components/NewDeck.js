import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, blue, gray } from '../utils/colors'

import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeck, generateUID } from '../utils/api'

class NewDeck extends Component {
	state = {
		deckTitle: ''
	}

	handleDeckTitleChange = (deckTitle) => {
		this.setState(() => ({
			deckTitle
		}))
	}

	handleSubmit = () => {
		const { deckTitle } = this.state
		const { dispatch } = this.props

		const id = generateUID()
		const newDeck = {
			id,
			title: deckTitle,
			questions: []
		}

		dispatch(addDeck(newDeck))

		this.setState(() => ({
			deckTitle: ''
		}))

		this.toDeck(newDeck.id, newDeck.title)

		saveDeck(id, newDeck)
	}

	toDeck = (deckId, title) => {
		this.props.navigation.dispatch(NavigationActions.navigate({
			routeName: 'DeckDetail',
			params: { deckId, title }
		}))
	}

	render() {
		const { deckTitle } = this.state

		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Text style={styles.deckTitle}>What is the the title of your new deck?</Text>
				<TextInput
	        value={deckTitle}
	        style={styles.inputText}
	        onChangeText={this.handleDeckTitleChange}
	      />
				<TouchableOpacity
					style={deckTitle === '' ? [styles.button, { backgroundColor: gray }] : styles.button}
					disabled={deckTitle === ''}
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>
						Create Deck
					</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
	},
	deckTitle: {
		fontSize: 30,
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 50,
		textAlign: 'center'
	},
	inputText: {
		width: 300,
		height: 40,
		fontSize: 20,
		marginBottom: 50,
		paddingLeft: 5,
		paddingBottom: 5
	},
  button: {
  	width: 150,
    padding: 10,
    backgroundColor: blue,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText :{
    color: white,
    fontSize: 15,
  }
})

export default connect()(NewDeck)