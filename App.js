import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, Keyboard, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  const [fontsLoaded] = useFonts({
    "NotoSerif-Regular": require("./assets/fonts/NotoSerif/NotoSerif-Regular.ttf"),
    "NotoSerif-Bold": require("./assets/fonts/NotoSerif/NotoSerif-Bold.ttf"),
    "ShantellSans-Regular": require("./assets/fonts/ShantellSans/ShantellSans-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  // Text.defaultProps = Text.defaultProps || {}
  // Text.defaultProps.style =  { fontFamily: 'ShantellSans-Regular' }

  const MainStack = createStackNavigator()

  return (
    <NavigationContainer>
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        onLayout={onLayoutRootView}
      >

        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen name="Registration" component={RegisterPage} />
          <MainStack.Screen name="Login" component={LoginPage}
            options={{ title: 'Enter the application' }}
          />
          <MainStack.Screen name="Home" component={HomePage} />
        </MainStack.Navigator>
        {/* <View style={{height: '100%', width: '100%', backgroundColor: 'green'}} /> */}

      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}