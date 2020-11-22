import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/mobile';
import QRCode from 'react-native-qrcode-svg';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';

import Input from '../../components/Input';

import { Container, Content, FormView, InputView, Socials, Button, ButtonText } from './styles';

interface ProfileProps {
  id: string;
  name: string;
  avatar: string;

  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

const Profile: React.FC = () => {
  const formRef = useRef(null);
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  useFocusEffect(() => {
    async function loadProfile() {
      const response = await AsyncStorage.getItem('@profile');
      setProfile(JSON.parse(response));
    }
    loadProfile();
  });

  const handleProfile = useCallback(async (data) => {
    await AsyncStorage.setItem('@profile', JSON.stringify(data));
    Alert.alert('Informações salvas', 'As informações do perfil foram salvas!');
  }, []);

  return (
    <Container>
      <Content>
        <QRCode
          value={JSON.stringify(profile)}
          size={180}
        />

        <FormView>
          <Form ref={formRef} onSubmit={handleProfile} initialData={profile}>
            <InputView>
              <FontAwesome5 name="user-alt" color="#dbdbdb" size={16} />
              <Input name="name" placeholder="Nome completo" />
            </InputView>

            <InputView>
              <FontAwesome5 name="image" color="#dbdbdb" size={18} />
              <Input name="avatar" placeholder="Cole o link do seu avatar" />
            </InputView>

            <Socials>Redes Sociais</Socials>

            <InputView>
              <MaterialIcons name="email" color="#dbdbdb" size={18} />
              <Input name="email" placeholder="E-mail" />
            </InputView>

            <InputView>
              <FontAwesome5 name="github" color="#dbdbdb" size={18} />
              <Input name="github" placeholder="Github" />
            </InputView>

            <InputView>
              <FontAwesome5 name="linkedin" color="#dbdbdb" size={18} />
              <Input name="linkedin" placeholder="Linkedin" />
            </InputView>

            <InputView>
              <FontAwesome5 name="twitter" color="#dbdbdb" size={16} />
              <Input name="twitter" placeholder="Twitter" />
            </InputView>

            <InputView>
              <FontAwesome5 name="instagram" color="#dbdbdb" size={18} />
              <Input name="instagram" placeholder="Instagram" />
            </InputView>

            <Button onPress={() => formRef.current.submitForm()}>
              <ButtonText>Salvar</ButtonText>
            </Button>
          </Form>
        </FormView>
      </Content>
    </Container>
  );
}

export default Profile;