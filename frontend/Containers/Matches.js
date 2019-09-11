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
	Badge,
	View,
} from 'native-base';

import DescriptionMatch from '../screens/MatchDetailScreen';

const Items = [
	{
		name: 'Maria',
		dogName: 'Rocky',
		imgG: 'http://dev.nrt24.ru/wp-content/uploads/2017/08/Mila-Kunis.jpg',
		imgD:
			'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
		index: 0,
		age: 22,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
	{
		name: 'Marta',
		dogName: 'Matty',
		imgG:
			'https://listaka.com/wp-content/uploads/2017/12/shutterstock_530967340-1.jpg',
		imgD:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-487880819-1565106514.jpg',
		index: 1,
		age: 24,
		gender: 'Transformer',
		bio: 'Me gustan las putas patatas tete asi que comprame unas!',
	},
	{
		name: 'Rex',
		dogName: 'Snowball',
		imgG:
			'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
		imgD:
			'https://cdn.theatlantic.com/assets/media/img/mt/2018/11/shutterstock_552503470/lead_720_405.jpg?mod=1541605820',
		index: 2,
		age: 18,
		gender: 'Female',
		bio:
			'Me gustan las putas estrellas tete asi que bajame una! Hakkuna matata',
	},
	{
		name: 'Titi',
		dogName: 'Simba',
		imgG:
			'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
		imgD:
			'https://tractive.com/static/images/product-images/tratr3g/tractive-gps-3g-dogtracker-dalmatian-dog.jpg',
		index: 3,
		age: 25,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
	{
		name: 'Patu',
		dogName: 'Trufas',
		imgG:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
		imgD: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg',
		index: 4,
		age: 22,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
	{
		name: 'Nuria',
		dogName: 'Peludito',
		imgG:
			'https://img.freepik.com/free-photo/smiling-young-pretty-woman-looking-camera-touching-face_1262-15253.jpg?size=626&ext=jpg',
		imgD:
			'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548__340.jpg',
		index: 5,
		age: 22,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
	{
		name: 'Noelia',
		dogName: 'Chucho',
		imgG:
			'http://www.worldwomanfoundation.com/summit2018/wp-content/uploads/2018/09/Jeannette_Ceja-_Head_Shot_2018_0.jpg',
		imgD:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaeGue0HlHLYRj5wYeUdYO1_geor9C3EvRh-nRzell6MbifcKrg',
		index: 6,
		age: 22,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
	{
		name: 'Pauli',
		dogName: 'SnataCLaus Helper',
		imgG:
			'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
		imgD:
			'https://images.squarespace-cdn.com/content/v1/5cb62a51c46f6d382c9c8a6b/1555457326933-J1SRB86OG4XWEOLSIQ1O/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=2500w',
		index: 7,
		age: 22,
		gender: 'Female',
		bio: 'Me gustan las putas estrellas tete asi que bajame una!',
	},
];

class Matches extends Component {
	render() {
		const HandleGender = ({ gender }) => {
			if (gender === 'Female') {
				return <FemaleSymbol />;
			}
			if (gender === 'Male') {
				return <MaleSymbol />;
			} else {
				return <TranformerSymbol />;
			}
		};
		const FemaleSymbol = () => {
			return <Icon type='Foundation' name='female-symbol' />;
		};
		const MaleSymbol = () => {
			return <Icon type='Foundation' name='male-symbol' />;
		};
		const TranformerSymbol = () => {
			return <Icon type='MaterialCommunityIcons' name='gender-male-female' />;
		};
		return (
			<Container>
				<Content padder>
					<ScrollView>
						<View style={styles.fire}>
							<View style={styles.icon}>
								<Icon type='AntDesign' name='adduser' />
								<View style={styles.badge}>
									<Badge>
										<Text style={{ fontSize: 13 }}>+2</Text>
									</Badge>
								</View>
							</View>
						</View>
						{Items.map(item => {
							return (
								<Card key={item.index}>
									<CardItem
										button
										onPress={() => {
											this.props.navigation.navigate({
												routeName: 'MatchDetail',
											});
										}}>
										<Body
											style={{
												flexDirection: 'row',
												justifyContent: 'center',
											}}>
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
									<CardItem footer style={styles.Name}>
										<View>
											<Text>
												{item.name} {item.age}
											</Text>
											<Text>{item.dogName} 10</Text>
										</View>
										<View>
											<Text>1 Km</Text>
											<HandleGender gender={item.gender} />
										</View>
									</CardItem>
									<CardItem footer style={styles.Name}>
										<Button
											onPress={() => {
												alert('Dislike');
											}}
											style={styles.dislike}>
											<Icon name='heart-dislike' />
										</Button>
										<Button
											onPress={() => {
												alert('Like');
											}}
											style={styles.like}>
											<Icon name='heart' />
										</Button>
									</CardItem>
								</Card>
							);
						})}
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	Name: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	fire: {
		marginBottom: 5,
		marginTop: 25,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	badge: {
		width: 40,
		fontSize: 7,
		position: 'absolute',
		bottom: 22,
		left: 22,
	},
	icon: {
		width: 30,
		position: 'relative',
	},
	like: {
		backgroundColor: 'blue',
		width: 150,
		display: 'flex',
		justifyContent: 'center',
	},
	dislike: {
		backgroundColor: 'black',
		width: 150,
		display: 'flex',
		justifyContent: 'center',
	},
});

export default Matches;
