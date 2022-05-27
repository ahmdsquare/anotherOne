import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/ContactUs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackScreen from './Stack';
import MyCart from '../screens/Cart';
import ProductInfo from '../screens/ProductInfo';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const ContactUs = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={StackScreen} />
    {/* <Stack.Screen name="MyCart" component={Contact} /> */}
    {/* <Stack.Screen name="ProductInfo" component={ProductInfo} /> */}
  </Stack.Navigator>
);

function DScreen({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ContactUs" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default DScreen;
