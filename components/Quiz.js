import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { white, gray, green, red, blue } from '../utils/colors'
import { connect } from 'react-redux'
import { addQuestionAnswer } from '../actions'
import { saveQuestionAnswer } from '../utils/api'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

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
		const { dispatch, deckId } = this.props

		const question = {
			index: questionIndex,
			guess
		}

		dispatch(addQuestionAnswer(deckId, question))
		saveQuestionAnswer(deckId, questionIndex, guess)

		clearLocalNotification()
			.then(setLocalNotification)
	}

	handleRestartQuiz = () => {
		const { dispatch, deckId, questions } = this.props

		for (index = 0; index < questions.length; index++) {
			dispatch(addQuestionAnswer(deckId, { index, guess: null }))
			saveQuestionAnswer(deckId, index, null)
		}
	}

	render() {
		const { showAnswer } = this.state
		const { questions, unansweredQuestions, score, goBack } = this.props
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
					<Text style={styles.scoreText}>Your score</Text>
					<Text style={styles.scoreNumber}>{score}%</Text>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: blue }]}
						onPress={goBack}
					>
						<Text style={styles.buttonText}>
							Back to Deck
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: red }]}
						onPress={this.handleRestartQuiz}
					>
						<Text style={styles.buttonText}>
							Restart Quiz
						</Text>
					</TouchableOpacity>
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
	scoreText: {
		fontSize: 40,
	},
	scoreNumber: {
		fontSize: 50,
		color: red,
		marginBottom: 100
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
	const unansweredQuestions = questions ? questions.filter((q) => q.guess === null) : []
	const correctAnswers = questions ? questions.filter((q) => q.guess === 'correct') : []
	const score = (correctAnswers && questions) ? Math.round(correctAnswers.length * 100 / questions.length) : null

	return {
		deckId,
		questions,
		unansweredQuestions,
		score,
		goBack: () => navigation.goBack()
	}
}

export default connect(mapStateToProps)(Quiz)