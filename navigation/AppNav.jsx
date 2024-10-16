import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '@/components/homeStack';
import CustomStatusBar from '@/components/statusBar';
import TabsLayout from '@/app/(tabs)/_layout';
const AppNav = () => {
    return (
        <NavigationContainer independent={true}>
            <CustomStatusBar />
            <HomeStack />
        </NavigationContainer>
    );
};

export default AppNav; 