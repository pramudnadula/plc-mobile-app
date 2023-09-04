import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const FormTitle = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>{props.name}</Text>
            {props.subName && <Text style={styles.subTitle}>- {props.subName}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        gap: 5,
    },
    mainTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
});

export default FormTitle;
