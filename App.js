import React from "react";
import { StyleSheet, View } from "react-native";

import SignupForm from "./src/components/SignupForm";
import SignInForm from "./src/components/SignInForm";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SignupForm />
                <SignInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around"
    }
});
