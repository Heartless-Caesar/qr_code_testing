import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QR_reader = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scanner_container}>
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      </View>
      <View style={styles.data_container}>
        {scanData && (
          <Button title="Scan Again?" onPress={() => setScanData(undefined)} />
        )}
      </View>
      <View style={styles.data}>
        <Text>{scanData}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  scanner_container: {
    flex: 2,
    marginTop: "20%",
  },
  data_container: {
    flex: 1,
    marginTop: "20%",
    paddingHorizontal: "10%",
  },
  data: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingVertical: "5%",
  },
});

export default QR_reader;
