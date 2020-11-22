import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 120px 20px 10px 20px;

  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const ContactName = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 28px;
  color: #dbdbdb;
`;

export const EventName = styled.Text`
  font-family: Poppins_200ExtraLight;
  font-size: 12px;
  color: #dbdbdb;
  margin-top: -10px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
`;

export const InputView = styled.View`
  width: 96%;
  height: 50px;
  margin-top: 8px;
  border-radius: 8px;
  padding: 0 28px;
  background-color: #2e2e2e;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LastInputView = styled.View`
  width: 96%;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 20px;
  border-radius: 8px;
  padding: 0 28px;
  background-color: #2e2e2e;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #262626;

  align-items: center;
  justify-content: center;

  border-radius: 8px;
`;

export const CancelButton = styled(RectButton)`
  width: 100%;
  height: 50px;
  background-color: #300000;

  align-items: center;
  justify-content: center;

  margin-top: 8px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: Poppins_400Regular;
  color: #dbdbdb;
  text-transform: uppercase;
`;

