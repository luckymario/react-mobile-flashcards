import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import Deck from './Deck'

import { connect } from 'react-redux'

import { white } from '../utils/colors'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

import { AsyncStorage } from 'react-native'

class Decks extends Component {
	state = {
		ready: false
	}

	componentDidMount() {
		const { dispatch } = this.props

		getDecks()
			.then((decks) => {
				dispatch(receiveDecks(decks))
			})
			.then(() => this.setState(() => ({
				ready: true
			})))
	}

	render() {
		const { ready } = this.state
		const { decks } = this.props

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

function mapStateToProps (decks) {
	return {
		decks
	}
}

export default connect(mapStateToProps)(Decks)