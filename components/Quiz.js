import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, gray, green, red } from '../utils/colors'
import { connect } from 'react-redux'
import { addQuestionAnswer } from '../actions'

class Quiz extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Quiz'
		}
	}

	state = {
		showAnswer: false
	}

	handleToggleCard = () => {
		this.setState(() => ({
			showAnswer: !this.state.showAnswer
		}))
	}

	handleAnswerQuestion = (questionIndex, guess) => {
		const { deckId, dispatch } = this.props

		const question = {
			deckId,
			index: questionIndex,
			guess
		}

		dispatch(addQuestionAnswer(question))
		//saveQuestionAnswer(deckId, questionIndex, guess)
	}

	render() {
		const { showAnswer } = this.state
		const { navigate } = this.props.navigation
		const { questions, unansweredQuestions } = this.props
		const index = unansweredQuestions.length ? questions.indexOf(unansweredQuestions[0]) : null

		return unansweredQuestions.length
			? (<View style={styles.container}>
					<Text style={styles.showAnswer}>{`Question ${index+1} of ${questions.length}`}</Text>
					<View style={showAnswer ? [styles.card, { backgroundColor: gray }] : styles.card}>
						{showAnswer
							? <Text style={styles.answer}>{unansweredQuestions[0].answer}</Text>
							: <Text style={styles.question}>{unansweredQuestions[0].question}</Text>}
					</View>
					<TouchableOpacity onPress={this.handleToggleCard}>
						<Text style={styles.showAnswer}>{showAnswer ? 'hide answer' : 'show answer'}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: green }]}
						onPress={() => this.handleAnswerQuestion(index, 'correct')}
					>
						<Text style={styles.buttonText}>
							Correct
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: red }]}
						onPress={() => this.handleAnswerQuestion(index, 'incorrect')}
					>
						<Text style={styles.buttonText}>
							Incorrect
						</Text>
					</TouchableOpacity>
				</View>)
			: (<View style={styles.container}>
					<Text style={styles.showAnswer}>Score</Text>
					<Text>{JSON.stringify(unansweredQuestions)}</Text>
				</View>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
	},
	card: {
		backgroundColor: white,
		borderRadius: 8,
		width: '100%',
		height: '40%',
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	question: {
		fontSize: 30,
		justifyContent: 'center',
	},
	answer: {
		fontSize: 30,
		justifyContent: 'center',
		color: white
	},
	showAnswer: {
		marginBottom: 100,
		fontSize: 18
	},
  button: {
  	width: 150,
    padding: 10,
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
	const questions = state[deckId].questions
	const unansweredQuestions = questions.filter((q) => q.guess === null)

	return {
		deckId,
		questions,
		unansweredQuestions
	}
}

export default connect(mapStateToProps)(Quiz)