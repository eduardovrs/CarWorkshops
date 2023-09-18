import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/pages/Routs';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Routes />
    </NavigationContainer>
  );
}
