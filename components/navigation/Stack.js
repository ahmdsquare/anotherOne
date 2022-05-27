import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyCart from '../screens/Cart';
import ProductInfo from '../screens/ProductInfo';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
    </Stack.Navigator>
  );
}

export default StackScreen;
