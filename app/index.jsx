// import React from 'react';
// import AppNav from '@/navigation/AppNav';
// import Onboarding from '@/components/Onboarding';

// export default function App() {
//     return <Onboarding/>;
// }
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '@/components/loginScreen';
import SignupScreen from '@/components/signupScreen';
import Onboarding from '@/components/onboarding';
import HomeStack from '@/components/homeStack';
import AppNav from '@/navigation/AppNav';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="AppNav" component={AppNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

