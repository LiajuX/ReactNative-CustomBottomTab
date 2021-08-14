import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { TabBarBg } from './TabBarBg';

import HomeSvg from '../../assets/home.svg';
import SettingsSvg from '../../assets/settings.svg';

import { Container, TabButton } from './styles';

export function MyTabBar({ 
  state, 
  descriptors, 
  navigation 
}: BottomTabBarProps) {
  return (
    <Container>
      <TabBarBg />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabButton
            key={options.title}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.7}
          >
            {
              label === 'Home' ?
              <HomeSvg
                width={30}
                height={30}
                fill={isFocused ? 
                options.tabBarActiveTintColor : options.tabBarInactiveTintColor}
              /> 
              :
              <SettingsSvg 
                width={30}
                height={30}
                fill={isFocused ? 
                options.tabBarActiveTintColor : options.tabBarInactiveTintColor}              
              />
            }
          </TabButton>
        );
      })}
    </Container>
  );
}
