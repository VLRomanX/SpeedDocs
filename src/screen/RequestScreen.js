import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, parameters } from "../global/styles";

export default function RequestScreen() {
    return (
        <View style={styles.container}>
            <Text>RequestScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: parameters.statusBarHeight,
    },
});
