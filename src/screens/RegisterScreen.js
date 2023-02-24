
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { css } from "../styles"

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const usernameInput = useRef()
  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
    usernameInput.current.clear()
  };

  const onSubmitPassword = (e) => {
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Text>Register Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login", { sessionId: 45, userId: "22e24" })}
        />

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

        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;