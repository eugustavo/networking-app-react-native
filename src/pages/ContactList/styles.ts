import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { ContactProps } from './';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding: 60px 20px 0px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #dbdbdb;
  font-size: 32px;
  font-family: Poppins_500Medium;
`;

export const Icon = styled.Image`
  width: 32px;
  height: 32px;
`;

export const SearchInput = styled.View`
  width: 100%;
  height: 42px;
  margin-top: 10px;
  border-radius: 12px;
  padding: 0 10px;
  background-color: #2e2e2e;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInputText = styled.TextInput.attrs({
  placeholderTextColor: '#7a7a7a'
})`
  width: 80%;
  height: 42px;
  font-family: Poppins_400Regular;
  color: #dbdbdb;
`;

export const ListContact = styled.FlatList.attrs<ContactProps>({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Contact = styled(RectButton)`
  width: 100%;
  height: 80px;
  padding: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
  background-color: #262626;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NoContact = styled.ImageBackground.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

export const NoContactText = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 18px;
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.6);
`;

export const NoContactTextSmall = styled.Text`
  font-family: Poppins_400Regular;
  font-size: 14px;
  margin-top: -8px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const InfoUser = styled.View`
  margin-left: 8px;
`;

export const UserName = styled.Text`
  font-family: Poppins_500Medium;
  font-size: 20px;
  color: #dbdbdb;
`;

export const EventName = styled.Text`
  font-family: Poppins_200ExtraLight;
  font-size: 12px;
  margin-top: -8px;
  margin-left: 2px;
  color: #c2c2c2;
`;