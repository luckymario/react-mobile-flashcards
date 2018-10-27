import { AsyncStorage } from 'react-native'
import { decks } from './_DATA'

AsyncStorage.setItem('decks', JSON.stringify(decks))

// getDecks: return all of the decks along with their titles, questions, and answers.
export function getDecks () {
	return AsyncStorage.getItem('decks')
		.then((results) => JSON.parse(results))
}

// getDeck: take in a single id argument and return the deck associated with that id.
export function getDeck () {
	//return AsyncStorage.getItem(decks)
}

// saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeck (id, deck) {
	return AsyncStorage.mergeItem('decks', JSON.stringify({
		[id]: deck,
	}))
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (deckId, card) {
	return AsyncStorage.getItem('decks')
		.then((results) => {
			const data = JSON.parse(results)
			data[deckId].questions.concat([card])
			AsyncStorage.setItem('decks', JSON.stringify(data))
		})
}

export function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}