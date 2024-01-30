import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFlashOn, setFlashOn] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleFlash = () => {
    setFlashOn(!isFlashOn);
  };

  const handleFlashlight = async () => {
    if (cameraRef.current) {
      const { status } = await BarCodeScanner.FlashMode.toggleAsync(cameraRef.current);
      setFlashOn(status === 'on');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
       //flashMode={isFlashOn ? BarCodeScanner.Constants.FlashMode.torch : BarCodeScanner.Constants.FlashMode.off}
        //ref={cameraRef}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      <TouchableOpacity style={styles.flashButton} onPress={handleFlashlight}>
        <MaterialIcons name={isFlashOn ? 'flash-on' : 'flash-off'} size={24} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Name: Item Name</Text>
            <Text>Code Number: {scannedData}</Text>
            <Text>Date Scanned: {new Date().toLocaleDateString()}</Text>
            <Text>Time Scanned: {new Date().toLocaleTimeString()}</Text>
            <Button title={'Close'} onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
