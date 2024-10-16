// import React from 'react';
// import { View, Text, StatusBar, StyleSheet, Platform } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'; // Import this hook
// import { colors } from '@/utils/colors';

// const CustomStatusBar = () => {
//     const navigation = useNavigation(); // Use the navigation hook

//     return (
//         <>
//             <StatusBar barStyle="light-content" backgroundColor="white" />
//             <View style={styles.statusBarContainer}>
//                 <Ionicons
//                     name="menu" // Use menu icon for the drawer
//                     size={38}
//                     color="white"
//                     onPress={() => navigation.toggleDrawer()} // This will open the drawer
//                 />
//                 <Text style={styles.title}>Wallet : ₹5000</Text>
//                 <View style={styles.rightIconContainer}>
//                     <Ionicons
//                         name="help-outline"
//                         size={38}
//                         color="white"
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </>
//     );
// };
// const styles = StyleSheet.create({
//     statusBarContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         height:
//             Platform.OS === 'android'
//                 ? getStatusBarHeight() + 50
//                 : getStatusBarHeight() + 40,
//         backgroundColor: colors.blue,
//         paddingTop: getStatusBarHeight(),
//         paddingHorizontal: 15,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     title: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: '600',
//     },
//     rightIconContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// });

// export default CustomStatusBar;
import React from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Platform,
    Image,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Ionicons } from '@expo/vector-icons'; // Install if not already installed
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '@/utils/colors';

const Drawer = createDrawerNavigator();
const CustomStatusBar = () => {
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="white"
                className=""
            />
            <View style={styles.statusBarContainer}>
                <Ionicons
                    name="reorder-three-outline"
                    size={38}
                    color="white"
                />
                <Text style={styles.title}>Wallet : ₹5000</Text>
                <View style={styles.rightIconContainer}>
                    <Ionicons
                        name="help-outline"
                        size={38}
                        color="white"
                        style={styles.icon}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    statusBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:
            Platform.OS === 'android'
                ? getStatusBarHeight() + 50
                : getStatusBarHeight() + 40,
        backgroundColor: colors.blue,
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 15,
    },
    icon: {
        marginRight: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    rightIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomStatusBar;
