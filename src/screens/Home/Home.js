import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MainButton from '../../components/Buttons/MainButton';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.log} />
            <Image source={require('../../assets/car.png')} style={styles.mainImage} />
            <MainButton title="Start Inspection" onPress={() => {
                navigation.navigate('profile');
            }} style={{ width: '45%', fontWeight: 'bold' }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    log: {
        width: '100%', // '100%
        height: 200,
        resizeMode: 'contain',
    },
    mainImage: {
        width: '100%', // '100%
        height: 300,
        resizeMode: 'contain',
    },
});

export default Home;
