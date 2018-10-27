import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'

class AddCard extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Add Card'
		}
	}

	render() {
		return (
			<View>
				<Text>Add Card Component</Text>
			</View>
		)
	}
}

export default AddCard