import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, orange, gray, blue, red } from '../utils/colors'

class DeckDetail extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deckId } = navigation.state.params

		return {
			title: `${deckId}`
		}
	}

	render() {
		const { deck } = this.props

		return (
			<View style={styles.container}>
				<Text style={styles.deckTitle}>{deck.title}</Text>
				<Text style={styles.deckSubtitle}>{`${deck.count} cards`}</Text>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>
						Add Card
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, { backgroundColor: red }]}>
					<Text style={styles.buttonText}>
						Start Quiz
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

function mapStateToProps (state, { navigation }) {
	const { deckId } = navigation.state.params

	return {
		deckId,
		deck: { title: 'test', count: '5' }, // state[deckId]
	}
}

function mapDispatchToProps (dispatch, { navigation }) {
	const { deckId } = navigation.state.params

	return {
		goBack: () => navigation.goBack()
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
		fontSize: 50
	},
	deckSubtitle: {
		marginBottom: 200,
		fontSize: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail)