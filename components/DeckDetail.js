import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { white, blue, red } from '../utils/colors'

class DeckDetail extends Component {
	static navigationOptions = ({ navigation }) => {
		const { title } = navigation.state.params

		return {
			title: `${title}`
		}
	}

	render() {
		const { deck } = this.props
		const { navigate } = this.props.navigation

		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.deckTitle}>{deck.title}</Text>
					<Text style={styles.deckSubtitle}>{`${deck.questions.length} cards`}</Text>
				</View>
				<View>
					<TouchableOpacity style={styles.button} onPress={() =>
						navigate('NewQuestion', { deckId: deck.id })
					}>
						<Text style={styles.buttonText}>
							Add Card
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[styles.button, { backgroundColor: red }]} onPress={() =>
						navigate('Quiz', { deckId: deck.id })
					}>
						<Text style={styles.buttonText}>
							Start Quiz
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
	},
	deckTitle: {
		fontSize: 50
	},
	deckSubtitle: {
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

function mapStateToProps (state, { navigation }) {
	const { deckId } = navigation.state.params

	return {
		deckId,
		deck: state[deckId]
	}
}

export default connect(mapStateToProps)(DeckDetail)