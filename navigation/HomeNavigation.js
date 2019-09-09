import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon, Button } from 'native-base';

import MatchesScreen from '../Containers/Matches';
import MessagesScreen from '../Containers/Messages';
import BlogScreen from '../Containers/Blog';
import ProfileScreen from '../Containers/Profile';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import MessagesDetailScreen from '../screens/MessagesDetailScreen';

const BlogNavigation = createStackNavigator({
	Blog: BlogScreen,
	BlogDetail: BlogDetailScreen,
});
const MessagesNavigation = createStackNavigator({
	Messages: MessagesScreen,
	MessagesDetail: MessagesDetailScreen,
});

const HomeTabNavigation = createBottomTabNavigator(
	{
		Matches: {
			screen: MatchesScreen,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Button small style={{ backgroundColor: 'black' }}>
							<Icon type='FontAwesome' name='paw' />
						</Button>
					);
				},
			},
		},
		Messages: {
			screen: MessagesNavigation,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Button small style={{ backgroundColor: 'black' }}>
							<Icon name='ios-chatboxes' />
						</Button>
					);
				},
			},
		},
		Blog: {
			screen: BlogNavigation,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Button small style={{ backgroundColor: 'black' }}>
							<Icon name='ios-paper' />
						</Button>
					);
				},
			},
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: () => {
					return (
						<Button small style={{ backgroundColor: 'black' }}>
							<Icon name='md-person' />
						</Button>
					);
				},
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: 'blue',
			inactiveTintColor: 'black',
			labelStyle: {
				fontSize: 12,
				paddingTop: 10,
			},
			style: {
				backgroundColor: '#fff',
				borderTopWidth: 0,
				height: 50,
				alignItems: 'center',
				marginBottom: 0,
				paddingBottom: 10,
			},
		},
	}
);

export default createAppContainer(HomeTabNavigation);
