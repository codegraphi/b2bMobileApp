import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { icons } from '../../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/homeScreen';
import Settings from './settings';
import Profile from './profile';
import { colors } from '@/utils/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, name, color, focused }) => {
    return (
        <View style={styles.tabIconContainer}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={styles.tabIconImage}
            />
            <Text
                className={`${focused} ? 'font-psemibold': 'font-pregular`}
                style={{ color: '#FFFFFF' }}
                // style={[

                //     styles.tabIconText,
                //     { fontFamily: focused ? 'font-psemibold' : 'font-pregular' },
                // ]}
            >
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.red,
                    tabBarInactiveTintColor: '#7393B3',
                    tabBarStyle: styles.tabBarStyle, // Using the style defined in the same file
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        title: 'Services',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.service}
                                color={color}
                                name="Services"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="ProfileTab"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
};

export default TabsLayout;

// Styles defined in the same file
const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 20,
        left: 25,
        right: 25,
        elevation: 10,
        backgroundColor: '#FFFF',
        borderRadius: 20,
        height: 67,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
    },
    tabIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // gap: 2,
    },
    tabIconImage: {
        width: 32,
        height: 32,
        top: 5,
    },
    tabIconText: {
        color: '#FFFFFF',
    },
});
