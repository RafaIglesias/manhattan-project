import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import {
	Container,
	Content,
	Card,
	CardItem,
	Body,
	Text,
	Icon,
	Button,
} from 'native-base';

export default DescriptionMatch = ({ item }) => {
	return (
		<CardItem style={styles.bio}>
			<View style={styles.info}>
				<Text>Age: {item.age}</Text>
			</View>
			<View style={styles.info}>
				<Text>Gender: {item.gender}</Text>
			</View>
			<View style={styles.info}>
				<Text>Bio: {item.bio}</Text>
			</View>
		</CardItem>
	);
};

const styles = StyleSheet.create({
	bio: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	info: {
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
	},
});
