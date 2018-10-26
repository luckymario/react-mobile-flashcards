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
export function saveDeckTitle () {
	//return AsyncStorage.getItem(decks)
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck () {
	//return AsyncStorage.getItem(decks)
}

/*export const CALENDAR_STORAGE_KEY = 'UdaciFitness:calendar'

export function fetchCalendarResults () {
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
		.then(formatCalendarResults)
}

export function submitEntry ({ entry, key }) {
	return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
		[key]: entry,
	}))
}

export function removeEntry (key) {
	return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
		.then((results) => {
			const data = JSON.parse(results)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
		})
}*/