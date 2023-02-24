import { StyleSheet, Platform } from "react-native";

export const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                backgroundColor: '#252634'
            },
            android: {
                backgroundColor: '#b9bac3'
            },
        })
    },

    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#d3d4dc',

    },

    button: {
        borderColor: 'green'
    }
});