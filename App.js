import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./src/screens/loginSignUpScreens/WelcomeScreen";
import LoginScreen from "./src/screens/loginSignUpScreens/LoginScreen";
import RootNavigation from "./src/RootNavigation";

export default function App() {
  return (
    <RootNavigation />
    // <WelcomeScreen />
    //  <LoginScreen />
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
