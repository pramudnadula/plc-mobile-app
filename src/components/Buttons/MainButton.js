import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MainButton = (props) => {
    const buttonStyles = [
        styles.touchable,
        props.style,
        props.disabled && styles.disabledButton,
    ];
    const textStyles = [styles.buttonText, props.textStyle];

    return (
        <TouchableOpacity
            style={buttonStyles}
            activeOpacity={0.8}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <Text style={textStyles}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: "red",
        borderRadius: 5,
        width: "100%",
        marginVertical: 8,
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",

    },
});

export default MainButton;
