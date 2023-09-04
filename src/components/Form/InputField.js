import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const InputField = (props) => {
    const [text, setText] = useState(""); // State to store user input

    const inputContainerStyle = {
        flexDirection: props.name ? "row" : "column",
        alignItems: props.name ? "center" : "flex-start",
        gap: props.name ? 10 : 0, // Add a gap if a name is provided
    };

    const handleTextChange = (newText) => {
        setText(newText);
        if (props.onChangeText) {
            // Pass the updated text to a callback function if provided
            props.onChangeText(newText);
        }
    };

    return (
        <>
            <View style={[styles.inputContainer, inputContainerStyle, props.styleContainer]}>
                {props.name && <Text style={[styles.label, props.inputTitle]}>{props.name}</Text>}
                <TextInput
                    style={[
                        styles.input,
                        props.style,
                        props.name ? { flex: 1 } : null, // Adjust width if a name is provided
                    ]}
                    placeholder={props.placeholder}
                    onChangeText={handleTextChange}
                    value={text}
                    secureTextEntry={props.secureTextEntry}
                    keyboardType={props.keyboardType}
                    autoCapitalize={props.autoCapitalize}
                    autoCorrect={props.autoCorrect}
                    placeholderTextColor={props.placeholderTextColor}
                />
            </View>
            {props.errorText && <Text style={styles.errorText}>{props.errorText}</Text>}
        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginVertical: 5,
        justifyContent: "space-between",
    },
    input: {
        height: 30,
        borderColor: "gray",
        borderWidth: 0.1,
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingLeft: 10,
        // marginVertical: 5, // Adjust the vertical margin
    },
    label: {
        fontSize: 13,
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
});

export default InputField;
