import styled from 'styled-components/native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 20px 10px;

  align-items: center;
  justify-content: center;
`;

export const Scanner = styled(BarCodeScanner)`
  height: 70%;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #262626;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const TitleButton = styled.Text`
  font-family: Poppins_400Regular;
  color: #dbdbdb;
  text-transform: uppercase;
`;
