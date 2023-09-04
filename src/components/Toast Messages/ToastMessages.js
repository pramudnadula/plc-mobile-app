import Toast from 'react-native-toast-message';

export const showToast = (type, text1, text2, position) => {
    Toast.show({
        type: type,
        text1: text1,
        text2: text2,
        position: position,
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
        onShow: () => { },
        onHide: () => { },
        onPress: () => { }
    });
}

