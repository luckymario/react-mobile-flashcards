import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, orange } from '../utils/colors'
import { withNavigation } from 'react-navigation'
//import { connect } from 'react-redux'

class Deck extends Component {
	render() {
		const { deck } = this.props
		const { navigate } = this.props.navigation

		return (
			<View style={styles.item}>
				<TouchableOpacity onPress={() =>
					navigate('DeckDetail', { deckId: deck.id, title: deck.title })
				}>
					<View style={{ flexDirection: 'row'}}>
						<MaterialCommunityIcons name='cards' size={44} color={orange} style={styles.deckIcon} />
						<View>
							<Text style={styles.deckName}>{deck.title}</Text>
							<Text>{`${deck.questions.length} cards`}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: white,
		borderRadius: Platform.OS === 'ios' ? 16 : 6,
		padding: 15,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 15,
		justifyContent: 'center'
	},
	deckIcon: {
		paddingRight: 15
	},
	deckName: {
		fontSize: 18
	}
})

//export default connect()(Deck)
export default withNavigation(Deck)