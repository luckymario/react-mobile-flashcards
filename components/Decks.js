import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import Deck from './Deck'

import { connect } from 'react-redux'

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
				{Object.values(decks).map((deck, index) => (
					<Deck key={index} id={deck.title} title={deck.title} count={deck.questions.length} />
				))}
			</View>
		)
	}
}

export default connect()(Decks)