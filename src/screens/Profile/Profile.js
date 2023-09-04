import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import InputField from '../../components/Form/InputField';
import MainButton from '../../components/Buttons/MainButton';

const Profile = () => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (newText) => {
        setInputText(newText);
    };

    const handleSubmit = () => {
        // Handle the form submission with the inputText value
        console.log("Input Value:", inputText);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/car.png')} style={styles.mainImage} />
            <ScrollView>
                <View style={styles.formContainer}>
                    <InputField name="1.1 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.2 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <InputField name="1.3 Registration No" placeholder="Enter your text" onChangeText={handleInputChange} value={inputText} />
                    <MainButton title="Start Inspection" onPress={() => { handleSubmit(); }} style={{ width: '45%', fontWeight: 'bold' }} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 200,
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
});

export default Profile;
