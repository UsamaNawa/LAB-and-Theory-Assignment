import React from "react";
import Login from "./Components/Login";
import Create from "./Components/Create";
import Profile from "./Components/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App () {
  const tab = createBottomTabNavigator();
   return (
    <NavigationContainer>
      <tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Login') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Create') {
              iconName = focused ? 'ios-radio' : 'ios-radio-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <tab.Screen name="Login" options={{title:"Login", headerStyle:{backgroundColor:"#5F9EA0"}, headerTitleAlign:"center"}}component={Login}/>
        <tab.Screen name="Create" options={{title:"Create page", headerStyle:{backgroundColor:"#5F9EA0"}, headerTitleAlign:"center"}}component={Create}/>
        <tab.Screen name="Profile" options={{title:"Profile", headerStyle:{backgroundColor:"#5F9EA0"}, headerTitleAlign:"center"}}component={Profile}/>



      </tab.Navigator>
    </NavigationContainer>
      
      
     
   );
};
