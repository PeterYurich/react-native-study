import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback, Keyboard, Text, View, Button } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '@app/screens/HomeScreen'
import LoginScreen from '@app/screens/LoginScreen';
import RegisterScreen from '@app/screens/RegisterScreen';
import { Provider } from 'react-redux';
import { store } from '@app/redux/store';

const MainStack = createStackNavigator()

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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          onLayout={onLayoutRootView}
        >
          <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Registration" component={RegisterScreen} />
            <MainStack.Screen name="Login" component={LoginScreen}
              options={{ title: 'Enter the application' }}
            />
            <MainStack.Screen name="Home" component={HomeScreen}
              options={{
                title: "Home screen",
                headerStyle: {
                  backgroundColor: "#072d31",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  fontSize: 20,
                },
                headerRight: () => (
                  <Button
                    onPress={() => alert("This is a button!")}
                    title="Press me"
                    color="#86ACB0"
                  />
                ),
              }} />
          </MainStack.Navigator>
          {/* <View style={{ height: '100%', width: '100%', backgroundColor: 'green', zIndex: -2 }} /> */}
        </TouchableWithoutFeedback>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}