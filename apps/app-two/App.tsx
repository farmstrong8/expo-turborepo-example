import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Orange } from "@local/ui/Orange";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Text>App Two</Text>
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
