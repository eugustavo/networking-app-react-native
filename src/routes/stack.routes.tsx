import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import ContactList from '../pages/ContactList';
import Scan from '../pages/Scan';
import Scanned from '../pages/Scanned';
import ContactDetails from '../pages/ContactDetails';

const Stack = createStackNavigator();

const StackRoutes = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="ContactList"
        component={ContactList}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{
          title: 'Novo contato',
          headerTitleAlign: 'center',
          headerTintColor: '#dbdbdb',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('ContactList')}>
              <Feather name="chevron-left" color="#c2c2c2" size={24} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Scanned"
        component={Scanned}
        options={{
          title: 'Salvar contato',
          headerTitleAlign: 'center',
          headerTintColor: '#dbdbdb',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
              <Feather name="chevron-left" color="#c2c2c2" size={24} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: '#dbdbdb',
          headerLeftContainerStyle: { marginLeft: 20 },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('ContactList')}>
              <Feather name="chevron-left" color="#c2c2c2" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;