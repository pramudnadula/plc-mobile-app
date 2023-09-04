import { StyleSheet, Text, View } from "react-native";

const Home = () => {
    <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    text: {
        marginTop: 20,
        color: "#000",
        fontSize: 35,
    },
});

export default Home;