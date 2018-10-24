import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { white, orange } from '../utils/colors'

class Deck extends Component {
	render() {
		const { title, count } = this.props

		return (
			<View style={styles.item}>
				<TouchableOpacity>
					<View style={{ flexDirection: 'row'}}>
						<MaterialCommunityIcons name='cards' size={44} color={orange} style={styles.deckIcon} />
						<View>
							<Text style={styles.deckName}>{title}</Text>
							<Text>{`${count} cards`}</Text>
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
		borderRadius: Platform.OS === 'ios' ? 16 : 4,
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

export default Deck