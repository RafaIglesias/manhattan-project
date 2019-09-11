import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const BlogDetail = props => {
	return (
		<View style={styles.screen}>
			<Text>Match Details of the female</Text>
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

export default BlogDetail;
