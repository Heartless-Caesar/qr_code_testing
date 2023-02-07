import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerExample from "./image_picker";

export default function App() {
  return (
    <>
      <ImagePickerExample />
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
