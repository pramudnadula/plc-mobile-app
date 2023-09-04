import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import InputField from '../../components/Form/InputField';
import MainButton from '../../components/Buttons/MainButton';
import FormTitle from '../../components/Form/FormTitle';

const Profile = ({ navigation }) => {
    const [registrationNo, setRegistrationNo] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [chassisNo, setChassisNo] = useState('')
    const [engineNo, setEngineNo] = useState('')
    const [classification, setClassification] = useState('')
    const [countryOfOrigin, setCountryOfOrigin] = useState('')
    const [countryUsed, setCountryUsed] = useState('')
    const [yearOfManufacture, setYearOfManufacture] = useState('')
    const [dateOfRegistration, setDateOfRegistration] = useState('')
    const [previousOwners, setPreviousOwners] = useState('')
    const [currentOwner, setCurrentOwner] = useState('')

    const handleSubmit = () => {
        // Handle the form submission with the inputText value
        console.log("Registration No", registrationNo);
        console.log("Make", make);
        console.log("Model", model);
        console.log("Chassis No", chassisNo);
        console.log("Engine No", engineNo);
        console.log("Classification", classification);
        console.log("Country of Origin", countryOfOrigin);
        console.log("Country Used", countryUsed);
        console.log("Year Of Manufacture", yearOfManufacture);
        console.log("Date Of Registration", dateOfRegistration);
        console.log("Previous Owners", previousOwners);
        console.log("Current Owner", currentOwner);

    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/car.png')} style={styles.mainImage} />
            <View style={styles.formContainer}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.inputContainer}>
                        <FormTitle name="0.1 Vehicle Identification Details" subName="As per vehicle" />
                        <View style={styles.inputFromCard}>
                            <InputField inputTitle={{ width: 150 }} name="1.1 Registration No" placeholder="Enter Registration No" onChangeText={(text) => setRegistrationNo(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.2 Make" placeholder="Enter Make" onChangeText={(text) => setMake(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.3 Model" placeholder="Enter Model" onChangeText={(text) => setModel(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.4 Chassis No" placeholder="Enter Chassis No" onChangeText={(text) => setChassisNo(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.5 Engine No" placeholder="Enter Engine No" onChangeText={(text) => setEngineNo(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.6 Classification" placeholder="Enter Classification" onChangeText={(text) => setClassification(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.7 Country of Origin" placeholder="Enter Country of Origin" onChangeText={(text) => setCountryOfOrigin(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.8 Country Used" placeholder="Enter Country Used" onChangeText={(text) => setCountryUsed(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.9 Year of Manufacture" placeholder="Enter Year of Manufacture" onChangeText={(text) => setYearOfManufacture(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.10 Date of Registration" placeholder="Enter Date of Registration" onChangeText={(text) => setDateOfRegistration(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.11 Previous Owners" placeholder="Enter Previous Owners" onChangeText={(text) => setPreviousOwners(text)} />
                            <InputField inputTitle={{ width: 150 }} name="1.12 Current Owner" placeholder="Enter Current Owner" onChangeText={(text) => setCurrentOwner(text)} />
                        </View>
                        <MainButton title="Next" onPress={() => { handleSubmit(); }} style={{ width: '45%', fontWeight: 'bold' }} />
                    </View>
                </ScrollView>
            </View>
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
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    inputFromCard: {
        backgroundColor: 'rgba(223, 237, 255, 0.5)',
        borderRadius: 10,
        paddingVertical: 20,
    },

});

export default Profile;
