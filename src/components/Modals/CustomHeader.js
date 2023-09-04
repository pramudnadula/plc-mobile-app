import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CustomHeader = ({ headline, navigation }) => {

    // handle back button press navigation and when back comes first screen exit app
    const handleBackPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            BackHandler.exitApp();
        }
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleBackPress()}>
                <MaterialIcons name="keyboard-arrow-left" size={40} color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 22, marginLeft: 16, fontWeight: 'bold', color: 'white' }}>
                {headline === 'NestedHome' ? "Inspection Form" : headline}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 18,
        marginTop: 30,
        backgroundColor: "red",
    }
});


export default CustomHeader;
