import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Apple } from "@local/ui/Apple";
import { Orange } from "@local/ui/Orange";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>App One</Text>
            <Apple />
            <Orange />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
