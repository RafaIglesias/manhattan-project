import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Messages = props => {
	return (
		<View style={styles.screen}>
			<Text>Messages</Text>
			<Button
				title='Blog'
				onPress={() => {
					props.navigation.navigate({ routeName: 'Blog' });
				}}
			/>
			<Button
				title='Go Back'
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Messages;
