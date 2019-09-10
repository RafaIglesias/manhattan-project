import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class Blog extends React.Component {
	render() {
		return (
			<View style={styles.screen}>
				<Text>Blog</Text>
				<Button
					title='BlogDetail'
					onPress={() => {
						this.props.navigation.navigate({ routeName: 'BlogDetail' });
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Blog;
