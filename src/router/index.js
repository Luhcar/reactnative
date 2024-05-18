import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Counter from '../pages/Counter';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Todo from '../pages/Todo';
import CreateTodo from '../pages/CreateTodo';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    marginBottom: 10,
                    marginHorizontal: 20,
                    borderRadius: 50,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />
            {/* <Tab.Screen name="Counter" component={Counter} /> */}
            <Tab.Screen
                name="Todolist"
                component={Todo}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="sticky-note-o" size={24} color={focused ? 'red' : 'grey'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
            <Stack.Screen name="CreateTodo" component={CreateTodo} options={{ headerShown: true, title:'Create Todo'}} />

        </Stack.Navigator>
    )
}

export default Router