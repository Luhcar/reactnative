import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Counter from './pages/Counter';
import SplashScreen from './pages/SplashScreen';
import {useState} from 'react';
import {getData} from './storages/localStorage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabHome" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="TabCounter" component={Counter} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

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
    <NavigationContainer initialRouteName="SpalshScreen">
      <Stack.Navigator>
        <Stack.Screen name="SpalshScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
