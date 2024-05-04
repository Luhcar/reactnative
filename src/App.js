import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';
import SplashScreen from './pages/SplashScreen';
import {useState} from 'react';
import {getData} from './storages/localStorage';

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
    <>
      {/* <Counter /> */}

      {/* <Home /> */}

      {/* <Login /> */}

      {isSplash ? 
      <SplashScreen /> 
      : 
      (isLogin ? <Home /> : <Login />)}
    </>
  );
};

export default App;
