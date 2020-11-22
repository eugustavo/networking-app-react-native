import React, { useCallback, useRef, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Form } from '@unform/mobile';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';

import Input from '../../components/Input'

import {
  Container,
  Content,
  Header,
  Avatar,
  ContactName,
  EventName,
  InputView,
  Title,
  Button,
  ButtonText
} from './styles';

const Scanned = ({ route }) => {
  const formRef = useRef(null);
  const { data } = route.params;
  const navigation = useNavigation();

  const [imageAvatar, setImageAvatar] = useState('');

  useFocusEffect(() => {
    async function loadAvatar() {
      if (data.avatar) {
        return setImageAvatar(data.avatar);
      }

      const response = await api.get(`/${data.github}`);
      setImageAvatar(response.data.avatar_url);
    }
    loadAvatar();
  });

  const handleSubmit = useCallback(async ({
    name,
    event,
    email,
    github,
    linkedin,
    twitter,
    instagram
  }) => {
    let image = '';

    if(data.avatar) {
      image = data.avatar;
    } else {
      const response = await api.get(`/${data.github}`);
      image = response.data.avatar_url;
    }

    const contact = {
      id: Math.random().toString(36).substring(1),
      name,
      event,
      avatar: image,
      email,
      github,
      linkedin,
      twitter,
      instagram,
    };

    const contacts = await AsyncStorage.getItem('@contacts');

    if(contacts) {
      const contactsArray: Array<Object> = JSON.parse(contacts)
      contactsArray.push(contact);

      await AsyncStorage.setItem('@contacts', JSON.stringify(contactsArray));
      navigation.navigate('ContactList');
    } else {
      await AsyncStorage.setItem('@contacts', JSON.stringify([contact]));
      navigation.navigate('ContactList');
    }
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          {!!imageAvatar ? (
            <Avatar source={{ uri: imageAvatar}} />
          ):(
            <ActivityIndicator size={32} color="#dbdbdb" />
          )}
          <ContactName>{data.name}</ContactName>
          <EventName>{data.event}</EventName>
        </Header>

        <Title>Informações</Title>
        
        <Form ref={formRef} onSubmit={handleSubmit} initialData={data}>
          <InputView>
            <FontAwesome5 name="user-alt" color="#dbdbdb" size={16} />
            <Input name="name" placeholder="Nome completo" />
          </InputView>

          <InputView>
            <MaterialIcons name="event" color="#dbdbdb" size={18} />
            <Input name="event" placeholder="Evento" />
          </InputView>

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
        </Form>

        <Button onPress={() => formRef.current.submitForm()}>
          <ButtonText>Salvar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
}

export default Scanned;