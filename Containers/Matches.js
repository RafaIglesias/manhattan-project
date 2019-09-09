import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

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

const Items = [
	{
		name: 'Maria',
		imgG: 'http://dev.nrt24.ru/wp-content/uploads/2017/08/Mila-Kunis.jpg',
		imgD:
			'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
		index: 0,
	},
	{
		name: 'Marta',
		imgG:
			'https://listaka.com/wp-content/uploads/2017/12/shutterstock_530967340-1.jpg',
		imgD:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-487880819-1565106514.jpg',
		index: 1,
	},
	{
		name: 'Rex',
		imgG:
			'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
		imgD:
			'https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg?mod=1541605820',
		index: 2,
	},
	{
		name: 'Titi',
		imgG:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imgD:
			'https://tractive.com/static/images/product-images/tratr3g/tractive-gps-3g-dogtracker-dalmatian-dog.jpg',
		index: 3,
	},
	{
		name: 'Patu',
		imgG:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		imgD: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg',
		index: 4,
	},
	{
		name: 'Nuria',
		imgG:
			'https://img.freepik.com/free-photo/smiling-young-pretty-woman-looking-camera-touching-face_1262-15253.jpg?size=626&ext=jpg',
		imgD:
			'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg',
		index: 5,
	},
	{
		name: 'Noelia',
		imgG:
			'http://www.worldwomanfoundation.com/summit2018/wp-content/uploads/2018/09/Jeannette_Ceja-_Head_Shot_2018_0.jpg',
		imgD:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaeGue0HlHLYRj5wYeUdYO1_geor9C3EvRh-nRzell6MbifcKrg',
		index: 6,
	},
	{
		name: 'Pauli',
		imgG:
			'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
		imgD:
			'https://images.squarespace-cdn.com/content/v1/5cb62a51c46f6d382c9c8a6b/1555457326933-J1SRB86OG4XWEOLSIQ1O/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w',
		index: 7,
	},
];

const Matches = props => {
	return (
		<Container>
			<Content padder>
				<ScrollView>
					<Text>Matches</Text>
					{Items.map(item => {
						return (
							<Card key={item.index}>
								<CardItem header>
									<Text>{item.name}</Text>
								</CardItem>
								<CardItem
									button
									onPress={() => {
										props.navigation.navigate({ routeName: 'Messages' });
									}}>
									<Body
										style={{ flexDirection: 'row', justifyContent: 'center' }}>
										<Image
											source={{
												uri: item.imgG,
											}}
											style={{ width: 200, height: 200 }}
										/>
										<Image
											source={{
												uri: item.imgD,
											}}
											style={{ width: 200, height: 200 }}
										/>
									</Body>
								</CardItem>
								<CardItem
									footer
									button
									onPress={() => {
										props.navigation.navigate({ routeName: 'Messages' });
									}}>
									<Button style={{ backgroundColor: 'blue' }}>
										<Icon name='heart' />
									</Button>
									<Button style={{ backgroundColor: 'black', marginLeft: 20 }}>
										<Icon name='heart-dislike' />
									</Button>
								</CardItem>
							</Card>
						);
					})}
				</ScrollView>
			</Content>
		</Container>
	);
};

export default Matches;
