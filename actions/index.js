export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveDecks (decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function addDeck (deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function addCard (deckId, card) {
	return {
		type: ADD_CARD,
		deckId,
		card
	}
}

export function addQuestionAnswer (deckId, question) {
	return {
		type: ADD_QUESTION_ANSWER,
		deckId,
		question
	}
}