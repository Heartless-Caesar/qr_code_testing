import * as RNImagePicker from "expo-image-picker";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, View, Text } from "react-native";
import { useState } from "react";

const ImagePickerExample = () => {
  const [scan, setScan] = useState(false);
  const [data, setData] = useState(null);

  const decode = async () => {
    try {
      const { status } =
        await RNImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === "granted") {
        const result = RNImagePicker.launchImageLibraryAsync({
          options: {
            allowsMultipleSelection: false,
          },
        });
        console.log(result);
        if (result && result.uri) {
          const results = await BarCodeScanner.scanFromURLAsync(result.uri);
          console.log(results); // many information
          console.log(results.data); // May be the one you are looking for
          setScan(true);
          setData(results.data);
          console.log(scan);
          console.log(data);
        } 
      }
    } catch (error) {
      console.debug(error);
    }
  };

  return (
    <View style={{ marginTop: "20%" }}>
      <Button title="Decode" onPress={() => decode()} />
      {scan ? <Text>{data}</Text> : <Text>Waiting</Text>}
    </View>
  );
};

export default ImagePickerExample;
