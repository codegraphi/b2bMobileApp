// // HomeTabs.js

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { View, Text, Image } from "react-native";
// import Profile from "../(tabs)/profile";
// import Settings from "../(tabs)/settings"; // Adjust the import path as necessary
// import Home from "./homeScreen";
// import { icons } from "@/constants";

// const Tab = createBottomTabNavigator();

// const TabIcon = ({ icon, name, color, focused }) => {
//   return (
//     <View style={{ alignItems: "center", justifyContent: "center", gap: 2 }}>
//       <Image
//         source={icon}
//         resizeMode="contain"
//         style={{
//           tintColor: color,
//           width: 32,
//           height: 32,
//           marginTop: 5,
//         }}
//       />
//       <Text
//         style={{
//           color: focused ? "#000000" : "#CDCDE0",
//           fontFamily: focused ? "font-psemibold" : "font-pregular",
//         }}
//       >
//         {name}
//       </Text>
//     </View>
//   );
// };

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: "#0000FF",
//         tabBarInactiveTintColor: "#CDCDE0",
//         tabBarStyle: {
//           backgroundColor: "#FFFF",
//           height: 60,
//           justifyContent: "center",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="HomeTab"
//         component={Home}
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon icon={icons.home} color={color} name="Home" focused={focused} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="ProfileTab"
//         component={Profile}
//         options={{
//           title: "Profile",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon icon={icons.profile} color={color} name="Profile" focused={focused} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="SettingsTab"
//         component={Settings}
//         options={{
//           title: "Settings",
//           headerShown: false,
//           tabBarIcon: ({ color, focused }) => (
//             <TabIcon icon={icons.service} color={color} name="Settings" focused={focused} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default HomeTabs;
