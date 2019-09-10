import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Icon, Button } from 'native-base';

import MatchesScreen from '../Containers/Matches';
import MessagesScreen from '../Containers/Messages';
import BlogScreen from '../Containers/Blog';
import ProfileScreen from '../Containers/Profile';
import MatchDetailScreen from '../screens/MatchDetailScreen';
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
const MatchNavigation = createStackNavigator({
	Match: MatchesScreen,
	MatchDetail: MatchDetailScreen,
});

const HomeTabNavigation = createBottomTabNavigator(
	{
		Matches: {
			screen: MatchNavigation,
			navigationOptions: {
				tabBarLabel: '',
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? 'blue' : 'black';
					return <Icon type='FontAwesome' name='paw' />;
				},
			},
		},
		Messages: {
			screen: MessagesNavigation,
			navigationOptions: {
				tabBarIcon: () => {
					return <Icon name='ios-chatboxes' />;
				},
			},
		},
		Blog: {
			screen: BlogNavigation,
			navigationOptions: {
				tabBarIcon: () => {
					return <Icon name='ios-paper' />;
				},
			},
		},
		Profile: {
			screen: ProfileScreen,
			navigationOptions: {
				tabBarIcon: () => {
					return <Icon name='md-person' />;
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
				paddingTop: 5,
			},
			style: {
				backgroundColor: '#fff',
				borderTopWidth: 1,
				borderTopColor: 'black',
				height: 58,
				display: 'flex',
				alignItems: 'center',
				paddingBottom: 5,
				paddingTop: 5,
			},
		},
	}
);

export default createAppContainer(HomeTabNavigation);
