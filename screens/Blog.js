import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Blog = props => {
	return (
		<View style={styles.screen}>
			<Text>Blog</Text>
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

export default Blog;
