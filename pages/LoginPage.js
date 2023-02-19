import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Text>Login asdf Screen</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LoginPage;