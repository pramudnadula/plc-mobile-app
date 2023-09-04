import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Animated, Easing, Text } from "react-native";
import Toast from "react-native-toast-message";
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from "./src/screens/SplashScreen";
import NoInternetModal from "./src/components/Modals/NoInternetModal";
import CustomHeader from "./src/components/Modals/CustomHeader";
import Home from "./src/screens/Home/Home";
import Profile from "./src/screens/Profile/Profile";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(1));
  const [isconnected, setisconnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setisconnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    // Simulate a delay for the splash screen
    setTimeout(() => {
      // Start the fade-out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000, // Adjust the duration as needed
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
      });
    }, 3000); // Adjust the duration as needed
  }, []);

  if (isLoading) {
    return <SplashScreen fadeAnim={fadeAnim} />;
  }

  return (
    <>
      <Toast />
      <NavigationContainer>
        <Toast />
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={TabNavigator} />
          <Stack.Screen name="profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
      <NoInternetModal visible={!isconnected} onClose={() => setisconnected(true)} />
    </>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: (props) => (
          <CustomHeader
            {...props}
            headline={route.params?.headline || route.name} // Pass the headline as a prop
          />
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "NestedHome") {
            iconName = "home";
            return (
              <MaterialIcons name={iconName} size={size} color={color} />
            );
          } else if (route.name === "profile") {
            iconName = "person";
            return (
              <MaterialIcons name={iconName} size={size} color={color} />
            );
          } else {
            iconName = "home";
            return (
              <MaterialIcons name={iconName} size={size} color={color} />
            );
          }
        },
        // headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
        },
        tabBarLabel: ({ focused, color }) => {
          const label = route.name === "NestedHome" ? "Home" : route.name;
          return <Text style={{ color: color, fontSize: 12 }}>{label}</Text>;
        },
      })}
    >
      <Tab.Screen name="NestedHome" component={Home} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default App;
