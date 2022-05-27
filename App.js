import React from 'react';
import {View, Text, Button} from 'react-native';
// import Home from './components/screens/Home';
import {NavigationContainer, StackActions} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MyCart from './components/screens/Cart';
// import ProductInfo from './components/screens/ProductInfo';
import Stack from './components/navigation/Stack';
import Drawer from './components/navigation/Drawer';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
const App = () => {
  return (
    // <Login />
    <NavigationContainer>
      {/* <Stack /> */}
      <Drawer />
    </NavigationContainer>
  );
};
export default App;
