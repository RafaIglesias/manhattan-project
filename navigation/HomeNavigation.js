import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import MatchesScreen from '../Containers/Matches';
import MessagesScreen from '../Containers/Messages';
import BlogScreen from '../Containers/Blog';
import ProfileScreen from '../Containers/Profile';
import BlogDetailScreen from '../screens/BlogDetailScreen';

const BlogNavigation = createStackNavigator({
	Blog: BlogScreen,
	BlogDetail: BlogDetailScreen,
});

const HomeTabNavigation = createBottomTabNavigator({
	Matches: MatchesScreen,
	Messages: MessagesScreen,
	Blog: BlogNavigation,
	Profile: ProfileScreen,
});

export default createAppContainer(HomeTabNavigation);
