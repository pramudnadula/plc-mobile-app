import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const InputField = (props) => {
    const [text, setText] = useState(""); // State to store user input
    const inputContainerStyle = {
        flexDirection: props.name ? "row" : "column",
        alignItems: props.name ? "center" : "flex-start",
    };

    const handleTextChange = (newText) => {
        setText(newText);
        if (props.onChangeText) {
            // Pass the updated text to a callback function if provided
            props.onChangeText(newText);
        }
    };

    return (
        <View style={[styles.inputContainer, inputContainerStyle, props.styleContainer]}>
            {props.name && <Text>{props.name}</Text>}
            <TextInput
                style={[styles.input, props.style]}
                placeholder={props.placeholder}
                onChangeText={handleTextChange}
                value={text}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                autoCapitalize={props.autoCapitalize}
                autoCorrect={props.autoCorrect}
                placeholderTextColor={props.placeholderTextColor}
            />
            <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        paddingHorizontal: 10,
        marginVertical: 8,
        gap: 10,
        justifyContent: "space-between"
    },
    input: {
        width: 250,
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
});

export default InputField;
