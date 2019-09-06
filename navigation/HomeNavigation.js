import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import MatchesScreen from '../screens/Matches';
import MessagesScreen from '../screens/Messages';
import BlogScreen from '../screens/Blog';
import ProfileScreen from '../screens/Profile';

const HomeNavigation = createStackNavigator({
	Matches: MatchesScreen,
	Messages: MessagesScreen,
	Blog: {
		screen: BlogScreen,
	},
	Profile: ProfileScreen,
});

const HomeTabNavigation = createBottomTabNavigator({
	Home: HomeNavigation,
	Matches: MatchesScreen,
	Messages: MessagesScreen,
	Blog: BlogScreen,
	Profile: ProfileScreen,
});

export default createAppContainer(HomeTabNavigation);
