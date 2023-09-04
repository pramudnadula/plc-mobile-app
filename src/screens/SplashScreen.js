import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, Animated } from "react-native";

const SplashScreen = ({ fadeAnim }) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: animation,
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          }
        ]}
      >
        <Image source={require('../assets/logo.png')} style={styles.image} />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: 200,
    height: 200,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  text: {
    marginTop: 20,
    fontFamily: "sans-serif",
    color: "#000",
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default SplashScreen;
