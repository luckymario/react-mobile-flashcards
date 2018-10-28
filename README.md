# Mobile Flashcards

Flashcards is a mobile application that allows users to study collections of flashcards.

In the app, users are able to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project was created in order to solidify my understanding of React Native in building iOS and Android application. The create-react-native-app was used to bootstrap the project. The app has been tested on Android phone using Expo application.

## Installation

To get started developing right away:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## How to launch the app?

To test the app you can use Android Studio, Xcode or Expo service.

## What You're Getting
```bash
├── App.js # A root of the app.
├── app.json # App settings.
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── actions # App actions.
│   └── index.js
├── assets # App images.
│  	├── icon.png # App icon.
│   └── splash.png # App splash screen.
├── components # React components.
│  	├── Deck.js # Renders single Deck with title and number of cards.
│  	├── DeckDetail.js # Displays individual deck view.
│  	├── Decks.js # Shows the list of all decks.
│  	├── NewDeck.js # Enables to add new deck.
│  	├── NewQuestion.js # Enables to add a card to existing deck.
│  	└── Quiz.js # Enables to guess the answers of questions from selected deck. When all the questions are answered, the score is visible.
├── reducers # App reducers.
│   └── index.js
└── utils
   	├── _DATA.js # Test database.
    ├── api.js # Contains getDecks, getDeck, saveDeck, addCardToDeck, saveQuestionAnswer functions.
    ├── colors.js # Contains constants representing colors used in the app.
    └── helpers.js # Includes clearLocalNotification, createNotification, setLocalNotification, generateUID functions.

```