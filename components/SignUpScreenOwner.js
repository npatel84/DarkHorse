import React, { Component } from "react";
import firebase from "../config/firebase";
import {
  Button,
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
const formValidationFuncs = require("../components/functions/FormValidation");

const MAX_ENTRY_LENGTH = 20;

class SignUpScreenOwner extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      title: "",
      pets_owned: "",
      isLoading: false,
    };
  }

  updateInputValue = (val, prop) => {
    const new_state = this.state;
    new_state[prop] = val;
    this.setState(new_state);
    console.log(prop + "= " + val);
  };

  registerUser = () => {
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      Alert.alert("Missing form entry");
    } else if (this.state.username.length > MAX_ENTRY_LENGTH) {
      Alert.alert("Username must be 20 characters of less");
    } else if (!formValidationFuncs.validEmail(this.state.email)) {
      Alert.alert("Valid email must contain '@' and '.'");
    } else if (this.state.password.length > MAX_ENTRY_LENGTH) {
      Alert.alert("Password must be 20 characters or less");
    } else if (!formValidationFuncs.validPassword(this.state.password)) {
      Alert.alert("Password must have a number and a special character");
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="grey" />
        </View>
      );
    }

    return (
      <View style={styles.formWrapper}>
        <TextInput
          style={styles.formField}
          placeholder="Username"
          value={this.state.username}
          onChangeText={(val) => this.updateInputValue(val, "username")}
        />
        <TextInput
          style={styles.formField}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputValue(val, "email")}
        />
        <TextInput
          style={styles.formField}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputValue(val, "password")}
          maxLength={20}
          secureTextEntry={true}
        />

        <Button
          color="lightblue"
          title="Sign Up"
          onPress={() => this.registerUser()}
        />

        <Text
          style={styles.redirectText}
          onPress={() => this.props.navigation.navigate("LogInScreen")}
        >
          Already have an account? Log In
        </Text>
      </View>
    );
  }
}

// UI
const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  formField: {
    width: "100%",
    alignSelf: "center",
    borderColor: "#444",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 20,
  },
  redirectText: {
    textAlign: "center",
    color: "black",
    marginTop: 24,
  },
  loading: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default SignUpScreenOwner;
