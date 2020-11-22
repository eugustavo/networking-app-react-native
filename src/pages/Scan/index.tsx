import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { Container, Scanner, Button, TitleButton } from './styles';

const Scan = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    const infos = JSON.parse(data);
    setScanned(false);
    setLoading(false);
    navigation.navigate('Scanned', { data: infos });
  };

  const handleScan = () => {
    setScanned(true)
    setLoading(true);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <Scanner
        onBarCodeScanned={scanned ? handleBarCodeScanned : undefined}
      />

      <Button onPress={handleScan}>
        {loading ? (
           <ActivityIndicator size={24} color="#dbdbdb" />
        ):(
          <TitleButton>
            Scanear
          </TitleButton>
        )}
      </Button>
    </Container>
  );
}

export default Scan;