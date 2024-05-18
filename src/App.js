import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {getData} from './storages/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


const App = () => {
  const [isSplash, setSplash] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);

    getData('auth').then(async res => {
      if (res) {
        setIsLogin(true);
      }
    });
  });

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
