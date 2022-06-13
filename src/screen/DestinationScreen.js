import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DestinationScreen = () => {
    return (
        <View>
            <Text>Destination</Text>
        </View>
    );
};

export default DestinationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: parameters.statusBarHeight,
    },

    view1: {
        position: "absolute",
        top: 25,
        left: 12,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2,
        zIndex: 10,
    },

    view3: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: colors.white,
        height: 30,
        zIndex: 10,
    },

    view2: { backgroundColor: colors.white, zIndex: 4, paddingBottom: 10 },

    view24: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 15,
        paddingHorizontal: 20,
    },

    view25: {
        flexDirection: "row",
        alignItems: "baseline",
    },

    flatlist: {
        marginTop: 20,
        zIndex: 17,
        elevation: 8,
    },
});

const autoComplete = {
    textInput: {
        backgroundColor: colors.grey6,
        height: 50,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
        borderWidth: 1,
        marginHorizontal: 15,
    },
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: colors.white,
    },

    textInputContainer: {
        flexDirection: "row",
    },
};
