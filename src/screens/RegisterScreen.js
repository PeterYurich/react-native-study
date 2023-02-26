
import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { css } from "../styles"

import { useDispatch } from "react-redux";
import { authRegister } from "@app/redux/auth/authOperations";

const RegisterScreen = ({ navigation }) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameInput = useRef()

  const nameHandler = (text) => setNickname(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const dispatch = useDispatch()
  const onRegister = () => {
    dispatch(authRegister({email, password}))
  }


  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
    >
      <View style={css.container}>
        <Text>Register Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login", { sessionId: 45, userId: "22e24" })}
        />

        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            value={nickname}
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
            value={email}
            onChangeText={emailHandler}
            placeholder="Email"
            style={css.input}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Password"
            secureTextEntry={true}
            style={css.input}
            // onSubmitEditing={onSubmitPassword}
            multiline={false}
          />
          <Button
            title={"Register"}
            onPress={onRegister} />
          <Text style={{ color: '#fff' }}>Default font</Text>

        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default RegisterScreen;