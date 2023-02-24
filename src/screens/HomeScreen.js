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

const Tabs = createBottomTabNavigator()


export default function HomeScreen({ navigation }) {


  const onCustomBtn = () => {
    console.log("Credentials", `${name} + ${password}`);
  }


  return (
    <View >
      {/* <View
        // style={css.container}
      >
        <ImageBackground
          style={{ width: '100%', height: "100%", position: 'absolute', zIndex: -1 }}
          source={{ uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg' }}></ImageBackground>
        <View style={{
          ...css.container,
          flex: 0,
          borderRadius: 20,
          backgroundColor: 'grey',
          marginBottom: 20,
          padding: 10
        }}
        >
          <Text>Default font</Text>
          <Image
            style={{ width: 100, height: 100, borderRadius: 20, }}
            source={require('../../assets/girl.png')} />
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ width: 100, height: 100, marginTop: 10, borderRadius: 20 }} />
          <Text style={{ fontFamily: 'ShantellSans-Regular' }}>ShantellSans-Regular</Text>
        </View>
        <TouchableHighlight
          style={{
            backgroundColor: 'green', borderRadius: 10, ...css.button, margin: 10,
            padding: 6, hight: 40, display: "flex", alignItems: 'center', justifyContent: 'center',
          }}
          onLongPress={onCustomBtn}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text
            style={{ fontFamily: 'NotoSerif-Regular' }}
          >To register</Text>
        </TouchableHighlight>
      </View>
      <View style={{flex: 1, backgroundColor: 'red', height: 500, width: 50}}>
      </View> */}

      <NavigationContainer independent={true}>
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
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            "tabBarStyle": [
              {
                "display": "flex"
              },
              null
            ]
          }}
        >
          <Tabs.Screen name="Settings" component={SettingsScreen} />
          <Tabs.Screen name="Profile" component={ProfileScreen} />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>

  );
}