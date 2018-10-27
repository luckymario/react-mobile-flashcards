import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, blue, gray } from '../utils/colors'

import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class NewQuestion extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Add Card'
		}
	}

	state = {
		question: '',
		answer: ''
	}

	handleQuestionChange = (question) => {
		this.setState(() => ({
			question
		}))
	}

	handleAnswerChange = (answer) => {
		this.setState(() => ({
			answer
		}))
	}

	handleSubmit = () => {
		const { question, answer } = this.state
		const { deckId, dispatch, goBack } = this.props

		const newCard = {
			question,
			answer
		}

		dispatch(addCard(deckId, newCard))

		this.setState(() => ({
			question: '',
			answer: ''
		}))

		goBack()

		addCardToDeck(deckId, newCard)
	}

	render() {
		const { question, answer } = this.state

		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<TextInput
	        value={question}
	        style={styles.inputText}
	        onChangeText={this.handleQuestionChange}
	        placeholder='Question'
	      />
	      <TextInput
	        value={answer}
	        style={styles.inputText}
	        onChangeText={this.handleAnswerChange}
	        placeholder='Answer'
	      />
				<TouchableOpacity
					style={(question === '' || answer === '') ? [styles.button, { backgroundColor: gray }] : styles.button}
					disabled={question === '' || answer === ''}
					onPress={this.handleSubmit}
				>
					<Text style={styles.buttonText}>
						Submit
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
	inputText: {
		width: 300,
		height: 40,
		fontSize: 20,
		marginBottom: 30,
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
    marginTop: 50,
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
		goBack: () => navigation.goBack()
	}
}

export default connect(mapStateToProps)(NewQuestion)