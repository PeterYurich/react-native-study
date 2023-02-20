import { StatusBar } from 'expo-status-bar';
import {
  Text, View, TextInput, Button, Alert,
  KeyboardAvoidingView,
  TouchableHighlight,
  Image, Keyboard, TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import { css } from '../../styles';
import { useRef, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from '../components';
import { Profile } from '../components';

SplashScreen.preventAutoHideAsync()

import React from 'react'

const Tabs = createBottomTabNavigator()


export default function HomeScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const usernameInput = useRef()

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
    usernameInput.current.clear()
  };

  const onCustomBtn = () => {
    console.log("Credentials", `${name} + ${password}`);
  }

  const onSubmitPassword = (e) => {
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={css.container}
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
        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={name}
            onChangeText={nameHandler}
            placeholder="Username"
            style={css.input}
            ref={usernameInput}
            enterKeyHint='next'
            defaultValue='defaultValue'
            cursorColor='black'
            selectionColor="red"
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={css.input}
            onSubmitEditing={onSubmitPassword}
            keyboardType='numeric'
            maxLength={4}
            multiline={false}
          />
          <Button
            title={"pop up"}
            onPress={onLogin} />
          <Text style={{ color: '#fff' }}>Default font</Text>
          <TouchableHighlight
            style={{
              backgroundColor: 'green', borderRadius: 10, ...css.button, margin: 10,
              padding: 6, hight: 40, display: "flex", alignItems: 'center', justifyContent: 'center',
            }}
            onLongPress={onCustomBtn}
          >
            <Text
              style={{ fontFamily: 'NotoSerif-Regular' }}
            >TouchableHighlight</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>

        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Profile") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "ios-settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen name="Settings" component={Settings} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>

      </View>
    </TouchableWithoutFeedback>
  );
}