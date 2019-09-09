import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import {
	Container,
	Content,
	Card,
	CardItem,
	Body,
	Text,
	Thumbnail,
	Left,
} from 'native-base';

const Items = [
	{
		name: 'Maria',
		img: 'http://dev.nrt24.ru/wp-content/uploads/2017/08/Mila-Kunis.jpg',
		index: 0,
	},
	{
		name: 'Marta',
		img:
			'https://listaka.com/wp-content/uploads/2017/12/shutterstock_530967340-1.jpg',

		index: 1,
	},
	{
		name: 'Rex',
		img:
			'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',

		index: 2,
	},
	{
		name: 'Titi',
		img:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',

		index: 3,
	},
	{
		name: 'Patu',
		img:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',

		index: 4,
	},
	{
		name: 'Nuria',
		img:
			'https://img.freepik.com/free-photo/smiling-young-pretty-woman-looking-camera-touching-face_1262-15253.jpg?size=626&ext=jpg',

		index: 5,
	},
	{
		name: 'Noelia',
		img:
			'http://www.worldwomanfoundation.com/summit2018/wp-content/uploads/2018/09/Jeannette_Ceja-_Head_Shot_2018_0.jpg',

		index: 6,
	},
	{
		name: 'Pauli',
		img:
			'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',

		index: 7,
	},
];

const Messages = props => {
	return (
		<Container style={styles.container}>
			<ScrollView>
				<Content>
					{Items.map(item => {
						return (
							<Card key={item.index}>
								<CardItem
									button
									onPress={() => {
										props.navigation.navigate({ routeName: 'MessagesDetail' });
									}}>
									<Left>
										<Thumbnail large source={{ uri: item.img }} />
										<Body>
											<Text>{item.name}</Text>
										</Body>
									</Left>
								</CardItem>
							</Card>
						);
					})}
				</Content>
			</ScrollView>
		</Container>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
});

export default Messages;
