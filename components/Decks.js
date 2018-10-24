import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import Deck from './Deck'

import { white } from '../utils/colors'
import { getDecks } from '../utils/api'

import { AsyncStorage } from 'react-native'

class Decks extends Component {
	state = {
		ready: true,
		decks: {}
	}

	componentDidMount() {
		getDecks()
			.then((decks) => {
				this.setState(() => ({
					decks
				}))
			})
	}

	render() {
		const { ready, decks } = this.state

		if (ready === false) {
			return <AppLoading />
		}

		return (
			<View>
				<Deck title='Udacicards' count={3} />
				<Deck title='new deck' count={0} />
				<Deck title='New deck 2' count={5} />
				{Object.values(decks).map((deck) => (
					<Deck key={deck.title} title={deck.title} count={deck.questions.length} />
				))}
			</View>
		)
	}
}

export default Decks