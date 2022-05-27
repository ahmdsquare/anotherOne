import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from '../screens/ContactUs';
const Drawer = createDrawerNavigator();

function DScreen({navigation}) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ContactUs" component={Contact} />
    </Drawer.Navigator>
  );
}

export default DScreen;
