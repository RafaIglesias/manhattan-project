import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Matches = props => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Matches</Text>
			<Button
				title='Messages'
				onPress={() => {
					props.navigation.navigate({ routeName: 'Messages' });
				}}
			/>
		</View>
	);
};

export default Matches;
