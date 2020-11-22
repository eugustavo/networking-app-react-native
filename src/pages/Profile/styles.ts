import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 70px 20px 20px 20px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const Socials = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 18px;
  color: #dbdbdb;
  text-align: center;
  margin-top: 20px;
`;

export const FormView = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const InputView = styled.View`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: #2e2e2e;

  flex-direction: row;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #262626;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-family: Poppins_400Regular;
  color: #dbdbdb;
  text-transform: uppercase;
`;

