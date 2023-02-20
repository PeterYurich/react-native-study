import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";



const LoginScreen = ({ navigation, route }) => {

    let userId = '321'
    // if (route.params.userId) {
    //     userId = route.params.userId;
    // }


    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Text>User Id {userId}</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />


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

export default LoginScreen;