import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsLayout from '@/app/(tabs)/_layout';
import AEPS from '@/app/screens/aeps';
import BBPS from '@/app/screens/bbps';
import MoneyTransfer from '@/app/screens/moneyTransfer';
import WalletToWallet from '@/app/screens/walltetToWallet';
import CreditCard from '@/app/screens/creditCard';
import CreditLine from '@/app/screens/creditLine';
import DematAccount from '@/app/screens/dematAccount';
import AccountOpening from '@/app/screens/accountOpening';
import OtherServices from '@/app/screens/otherServices';
import Investment from '@/app/screens/investment';
import Insurance from '@/app/screens/insurance';
import MobileRecharge from '@/app/screens/mobileRecharge';
import DTHRecharge from '@/app/screens/dthRecharge';
import PersonalLoan from '@/app/screens/personalLoan';
import BusinessLoan from '@/app/screens/businessLoan';
import CustomStatusBar from './statusBar';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTabs"
                component={TabsLayout}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AEPS"
                component={AEPS}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BBPS"
                component={BBPS}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MoneyTransfer"
                component={MoneyTransfer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WalletToWallet"
                component={WalletToWallet}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreditCard"
                component={CreditCard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreditLine"
                component={CreditLine}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DematAccount"
                component={DematAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AccountOpening"
                component={AccountOpening}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OtherServices"
                component={OtherServices}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Investment"
                component={Investment}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Insurance"
                component={Insurance}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MobileRecharge"
                component={MobileRecharge}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DTHRecharge"
                component={DTHRecharge}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PersonalLoan"
                component={PersonalLoan}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BusinessLoan"
                component={BusinessLoan}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
