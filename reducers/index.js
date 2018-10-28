import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, ADD_QUESTION_ANSWER } from '../actions'

function decks (state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS:
			return {
				...state,
				...action.decks
			}

		case ADD_DECK:
			const { deck } = action

			return {
				...state,
				[deck.id]: deck
			}

		case ADD_CARD :
      const { deckId, card } = action

			return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card])
        }
			}

		case ADD_QUESTION_ANSWER :
      const { question } = action
      const index = parseInt(question.index, 10)

			return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [
          	...state[action.deckId].questions.slice(0, index),
          	{
          		...state[action.deckId].questions[index],
          		guess: question.guess
          	},
          	...state[action.deckId].questions.slice(index + 1),
          ]
        }
			}

		default:
			return state
	}
}

export default decks