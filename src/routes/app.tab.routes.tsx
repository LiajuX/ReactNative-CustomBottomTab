import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

import { MyTabBar } from '../components/MyTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary80,
        tabBarShowLabel: false,
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Screen 
        name="Home"
        component={Home}
      />

      <Screen
        name="Settings"
        component={Settings}
      />
    </Navigator>
  );
}
