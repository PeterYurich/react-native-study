import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { css } from "@app/styles";
import { useDispatch } from "react-redux";
import { authLogin } from "@app/redux/auth/authOperations";

const LoginScreen = ({ navigation, route }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleEmail = text => setEmail(text)
    const handlePassword = text => setPassword(text)


    let userId = '321'
    // if (route.params.userId) {
    //     userId = route.params.userId;
    // }
    const onLogin = () => {
        dispatch(authLogin({email, password}))
    }


    return (
        <View style={css.container}>
            <Text>Login Screen</Text>
            <Text>User Id {userId}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

            <TextInput value={email}
                onChangeText={handleEmail}
                placeholder="Email"
                style={css.input}>
            </TextInput>
            <TextInput value={password}
                onChangeText={handlePassword}
                placeholder="Password"
                style={css.input}>
            </TextInput>
            <Button 
            title="Login"
            onPress={onLogin} 
            />
        </View>
    );
};


export default LoginScreen;