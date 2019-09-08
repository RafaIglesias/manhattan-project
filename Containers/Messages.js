import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';

const Messages = props => {
	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.item1}>
					<Text style={{ fontSize: 20, color: '#fff' }}>Item number 1</Text>
				</View>
				<View style={styles.item2}>
					<Text style={{ fontSize: 20, color: '#fff' }}>Item number 1</Text>
				</View>
				<View style={styles.item3}>
					<Text style={{ fontSize: 20, color: '#fff' }}>Item number 1</Text>
				</View>
				<View style={styles.item4}>
					<Text style={{ fontSize: 20, color: '#fff' }}>Item number 1</Text>
				</View>
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
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 40,
		justifyContent: 'center',
		backgroundColor: '#fff',
		alignItems: 'stretch',
	},
	title: {
		fontSize: 20,
		color: '#fff',
	},
	item1: {
		backgroundColor: 'orange',
		flex: 1,
		height: 120,
	},
	item2: {
		backgroundColor: 'purple',
		flex: 1,
		height: 120,
	},
	item3: {
		backgroundColor: 'yellow',
		flex: 1,
		height: 120,
	},
	item4: {
		backgroundColor: 'red',
		flex: 1,
		height: 120,
	},
});

export default Messages;
