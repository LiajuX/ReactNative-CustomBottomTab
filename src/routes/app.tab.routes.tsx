import React from 'react';
import { useTheme } from 'styled-components';
import { Foundation, Ionicons } from '@expo/vector-icons'; 
import { 
  createBottomTabNavigator, 
  BottomTabBar 
} from '@react-navigation/bottom-tabs'; 

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

import { TabBarBg } from '../assets/TabBarBg';

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
        tabBarStyle: {
          position: 'absolute',
          width: '100%',
          height: 64,
          paddingHorizontal: 70,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
          zIndex: 5,
        }
      }}
      tabBar={(props) => {
        return (
          <>
            <BottomTabBar
              {...props}
            />

            <TabBarBg />
          </>
        );
      }}
    >
      <Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Foundation
              name="home"
              size={size}
              color={color}
              style={{
                alignSelf: 'flex-start'
              }}
            />
          )),
        }}
      />

      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Ionicons
              name="ios-settings-sharp"
              size={size}
              color={color}
              style={{
                alignSelf: 'flex-end'
              }}
            />
          ))
        }}
      />
    </Navigator>
  );
}
