import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes';
import { Text } from 'react-native';

export default function App() {
  const linking = {
    prefixes: ['wesley://', 'https://wesleyfeitosa.dev'],
    config: {
      screens: {
        Detail: {
          path: 'detail/:pedido',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <StatusBar style="auto" />
      <Routes />
    </NavigationContainer>
  );
}
