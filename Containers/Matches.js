import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	Image,
	StyleSheet,
	ScrollView,
} from 'react-native';

const Matches = props => {
	return (
		<View
			style={{
				marginTop: 50,
				marginBottom: 50,
			}}>
			<ScrollView>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text>Matches</Text>
					<View
						style={{
							backgroundColor: 'gray',
						}}>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								marginHorizontal: 30,
							}}>
							<Image
								source={{
									uri:
										'https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=0hb44OrI',
								}}
								style={{ width: 150, height: 150 }}
							/>
							<Image
								source={{
									uri:
										'https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782',
								}}
								style={{ width: 150, height: 150 }}
							/>
						</View>
						<Text>Maria</Text>
					</View>
					<View
						style={{
							border: '1px solid black',
						}}>
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
								marginHorizontal: 30,
							}}>
							<Image
								source={{
									uri:
										'http://dev.nrt24.ru/wp-content/uploads/2017/08/Mila-Kunis.jpg',
								}}
								style={{ width: 150, height: 150 }}
							/>
							<Image
								source={{
									uri:
										'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bernese-mountain-dog-royalty-free-image-487880819-1565106514.jpg',
								}}
								style={{ width: 150, height: 150 }}
							/>
						</View>
						<Text>Juana</Text>
					</View>
					<View>
						<Image
							source={{
								uri:
									'https://listaka.com/wp-content/uploads/2017/12/shutterstock_530967340-1.jpg',
							}}
							style={{ width: 200, height: 200 }}
						/>
						<Text>Rex</Text>
					</View>
					<Button
						title='Messages'
						onPress={() => {
							props.navigation.navigate({ routeName: 'Messages' });
						}}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Matches;
