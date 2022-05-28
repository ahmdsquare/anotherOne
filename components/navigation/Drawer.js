import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/ContactUs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackScreen from './Stack';
import MyCart from '../screens/Cart';
import ProductInfo from '../screens/ProductInfo';
import Home from '../screens/Home';
import Policy from '../screens/PolicyScreen';

const Stack = createNativeStackNavigator();
const ContactUs = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={StackScreen} />
  </Stack.Navigator>
);

const HomePolicy = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Policy} />
  </Stack.Navigator>
);

const HomeContact = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Contact} />
  </Stack.Navigator>
);

function DScreen({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Pharmacy" component={HomeStack} />
      <Drawer.Screen name="Policy" component={HomePolicy} />
      <Drawer.Screen name="Contact" component={HomeContact} />
    </Drawer.Navigator>
  );
}

export default DScreen;
