import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = ({ headline, navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
