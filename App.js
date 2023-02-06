import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QR_reader from "./qr_code_reader";

export default function App() {
  return (
    <>
      <QR_reader />
    </>
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
