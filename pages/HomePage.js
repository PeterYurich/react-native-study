import { StatusBar } from 'expo-status-bar';
import {
  Text, View, TextInput, Button, Alert,
  KeyboardAvoidingView,
  TouchableHighlight,
  Image, Keyboard, TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import { css } from '../styles';
import { useRef, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync()

export default function HomePage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const usernameInput = useRef()

  const [fontsLoaded] = useFonts({
    "NotoSerif-Regular": require("../assets/fonts/NotoSerif/NotoSerif-Regular.ttf"),
    "NotoSerif-Bold": require("../assets/fonts/NotoSerif/NotoSerif-Bold.ttf"),
    "ShantellSans-Regular": require("../assets/fonts/ShantellSans/ShantellSans-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <View style={{height: 200, width: 200, backgroundColor: 'red'}} />
  }

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
          // onLayout={onLayoutRootView}
        >
          <Text>Default font</Text>
          <Image
            style={{ width: 100, height: 100, borderRadius: 20, }}
            source={require('../assets/girl.png')} />
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
            title={"login"}
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
      </View>
    </TouchableWithoutFeedback>
  );
}