import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LogInOrSignUp from "./components/LogInOrSignUp";
import LogInScreen from "./components/LogInScreen";
import SignUpScreenOwner from "./components/SignUpScreenOwner";
import Dashboard from "./components/Dashboard";
import SignUpProfile from "./components/SignUpProfile";
import SignUpScreenProfessional from "./components/SignUpScreenProfessional";

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="LogInOrSignUp"
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000000", // header color
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "normal",
        },
      }}
    >
      <Stack.Screen
        name="LogInOrSignUp"
        component={LogInOrSignUp}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="LogInScreen"
        component={LogInScreen}
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name="SignUpScreenOwner"
        component={SignUpScreenOwner}
        options={{ title: "Horse Owner Sign Up" }}
      />
      <Stack.Screen
        name="SignUpScreenProfessional"
        component={SignUpScreenProfessional}
        options={{ title: "Horse Professional Sign Up" }}
      />
      <Stack.Screen
        name="SignUpProfile"
        component={SignUpProfile}
        options={{ title: "Sign Up" }}
      />
      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ title: "Dashboard" }, { headerLeft: null })}
      /> */}
    </Stack.Navigator>
  );
}

export default function App() {
  console.log("App executed");
  const handlePress = () => console.log("Text pressed");

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
    // <SafeAreaView style={[styles.container, containerStyle]}>
    //   <Text onPress={handlePress}>Hello React Native</Text>

    //   <TouchableHighlight
    //     onPress={() => Alert.alert("My Title", "Image Pressed Alert")}
    //   >
    //     <Image
    //       blurRadius={1}
    //       fadeDuration={1000}
    //       resizeMode="contain"
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300",
    //       }}
    //     />
    //   </TouchableHighlight>
    //   <Button
    //     title="Log In"
    //     onPress={() =>
    //       Alert.alert("My Title", "Log In Pressed", [
    //         { text: "Cancel", onPress: () => console.log("Cancel") },
    //         { text: "Ok", onPress: () => console.log("Ok") },
    //       ])
    //     }
    //   />
    //   <Button
    //     title="Sign Up"
    //     onPress={() =>
    //       Alert.alert("My Title", "Log In Pressed", [
    //         { text: "Cancel", onPress: () => console.log("Cancel") },
    //         { text: "Ok", onPress: () => console.log("Ok") },
    //       ])
    //     }
    //   />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
