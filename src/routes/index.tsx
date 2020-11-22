import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from './stack.routes';
import Profile from '../pages/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: { 
            backgroundColor: '#262626',
            borderTopWidth: 0,  
          },
          showLabel: false,
          activeTintColor: '#a1a1a1',
          inactiveTintColor: '#3d3d3d'
        }}
      >
        <Screen
          name="Dashboard"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name={ focused ? 'home-variant' : 'home-variant-outline' } size={34} color={color} />,
          }}
        />

        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color, size }) => <FontAwesome name={ focused ? 'user-circle' : 'user-circle-o' } size={32} color={color} />,

          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;