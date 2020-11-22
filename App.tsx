import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Poppins_200ExtraLight, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor="#121212" style="light" />
      <Routes />
    </>
  );
}
