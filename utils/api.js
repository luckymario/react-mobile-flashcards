import { AsyncStorage } from 'react-native'
import { decks } from './_DATA'

// Set initial data
//AsyncStorage.setItem('decks', JSON.stringify(decks))
//AsyncStorage.removeItem('decks')

/*AsyncStorage.getItem('decks')
  .then(JSON.parse)
  .then((data) => {
    if (data === null) {
    	AsyncStorage.setItem('decks', JSON.stringify(decks))
    }
  })*/

export function getDecks () {
	return AsyncStorage.getItem('decks')
		.then((results) => JSON.parse(results))
}

export function getDeck (id) {
	return AsyncStorage.getItem('decks')
		.then((results) => JSON.parse(results))
		.then((data) => data[id])
}

export function saveDeck (id, deck) {
	return AsyncStorage.mergeItem('decks', JSON.stringify({
		[id]: deck,
	}))
}

export function addCardToDeck (deckId, card) {
	return AsyncStorage.getItem('decks')
		.then((results) => {
			const decks = JSON.parse(results)
			decks[deckId].questions = decks[deckId].questions.concat([card])
			AsyncStorage.setItem('decks', JSON.stringify(decks))
		})
}

export function saveQuestionAnswer (deckId, questionIndex, guess) {
	return AsyncStorage.getItem('decks')
		.then((results) => {
			const decks = JSON.parse(results)
			decks[deckId].questions[questionIndex].guess = guess
			AsyncStorage.setItem('decks', JSON.stringify(decks))
		})
}