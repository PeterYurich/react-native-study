import { StatusBar } from 'expo-status-bar';
import {
  Text, View, TextInput, Button, Alert,
  Image, Keyboard, TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import { css } from '../styles';
import * as SplashScreen from 'expo-splash-screen';

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from './SettingsScreen'
import ProfileScreen from './ProfileScreen';

// SplashScreen.preventAutoHideAsync()

import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './RegisterScreen';

const Tabs = createBottomTabNavigator()


export default function HomeScreen({ navigation }) {


  const onCustomBtn = () => {
    console.log("Credentials", `${name} + ${password}`);
  }


  return (
    <View style={{flex: 1}}>

        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Profile") {
                iconName = focused
                  ? "person-circle"
                  : "person-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused
                  ? "cog"
                  : "cog-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarOptions: {
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }
          })
        }

        >
          <Tabs.Screen name="Settings" component={SettingsScreen} />
          <Tabs.Screen name="Profile" component={ProfileScreen} />
          <Tabs.Screen name="Register" component={RegisterScreen} />
        </Tabs.Navigator>
    </View>

  );
}