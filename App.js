import { StyleSheet } from "react-native";
import React from "react";
import {
    OriginContextProvider,
    DestinationContextProvider,
} from "./src/contexts/contexts";
import RootNavigator from "./src/navigations/RootNavigator";

const App = () => {
    return (
        <DestinationContextProvider>
            <OriginContextProvider>
                <RootNavigator />
            </OriginContextProvider>
        </DestinationContextProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
