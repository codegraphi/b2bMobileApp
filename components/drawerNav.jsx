// drawerNav.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from '@/components/homeStack'; // Ensure this path is correct
import OtherServices from '@/app/screens/otherServices';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack}/>
            <Drawer.Screen name="Other" component={OtherServices} />
        </Drawer.Navigator>
    );
};

export default DrawerNav;
