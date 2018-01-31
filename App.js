import React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";

import SignupForm from "./src/components/SignupForm";
import SignInForm from "./src/components/SignInForm";

export default class App extends React.Component {
    componentDidMount() {
        const config = {
            apiKey: "AIzaSyDmq8QoeLKPDo0L9I_ptHH_LkX4PCyM0QU",
            authDomain: "one-time-pwd-b2b7a.firebaseapp.com",
            databaseURL: "https://one-time-pwd-b2b7a.firebaseio.com",
            projectId: "one-time-pwd-b2b7a",
            storageBucket: "one-time-pwd-b2b7a.appspot.com",
            messagingSenderId: "475427789764"
        };
        firebase.initializeApp(config);
    }

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
