
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login", { sessionId: 45, userId: "22e24" })}
      />
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

export default RegisterScreen;