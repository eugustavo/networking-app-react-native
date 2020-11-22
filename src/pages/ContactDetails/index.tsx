import React, { useCallback, useRef } from 'react';
import { Alert, Linking } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import Input from '../../components/Input'

import { ContactProps } from '../ContactList';

import {
  Container,
  Header,
  Avatar,
  Content,
  InputView,
  LastInputView,
  Button,
  CancelButton,
  ButtonText
} from './styles';

const ContactDetails = ({ route }) => {
  const formRef = useRef(null);
  const { data: contact } = route.params;
  const navigation = useNavigation();

  useFocusEffect(() => {
    navigation.setOptions({ title: `${contact.name}`})
  })

  const handleEditContact = useCallback(async (data) => {
    const contacts = await AsyncStorage.getItem('@contacts');

    const contactsArray: Array<ContactProps> = JSON.parse(contacts);
    const contactIndex = contactsArray.findIndex(contactFilter => contactFilter.id === contact.id);
    contactsArray[contactIndex] = data;
    contactsArray[contactIndex].avatar = contact.avatar;

    await AsyncStorage.setItem('@contacts', JSON.stringify(contactsArray));
    Alert.alert('Contato Alterado', `O contado foi alterado com sucesso!`)
    navigation.navigate('ContactList');
  }, []);

  const handleRemoveContact = useCallback(async () => {
    const contacts = await AsyncStorage.getItem('@contacts');

    let contactsArray: Array<ContactProps> = JSON.parse(contacts);
    contactsArray = contactsArray.filter(contactFilter => contactFilter.id !== contact.id);

    await AsyncStorage.setItem('@contacts', JSON.stringify(contactsArray));
    Alert.alert('Contato Removido', `${contact.name} foi removido com sucesso da sua lista de contatos.`)
    navigation.navigate('ContactList');
  }, []);
  
  return (
    <Container>
      <Content>
        <Header>
          <Avatar source={{ uri: contact.avatar}} />
        </Header>

        <Form ref={formRef} onSubmit={handleEditContact} initialData={contact}>
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
            <BorderlessButton onPress={() => Linking.openURL(`https://github.com/${contact.github}`)}>
              <FontAwesome5 name="github" color="#dbdbdb" size={18} />
            </BorderlessButton>

            <Input name="github" placeholder="Github" />
          </InputView>

          <InputView>
            <BorderlessButton onPress={() => Linking.openURL(`https://www.linkedin.com/in/${contact.linkedin}`)}>
              <FontAwesome5 name="linkedin" color="#dbdbdb" size={18} />
            </BorderlessButton>

            <Input name="linkedin" placeholder="Linkedin" />
          </InputView>

          <InputView>
            <BorderlessButton onPress={() => Linking.openURL(`https://twitter.com/${contact.twitter}`)}>
              <FontAwesome5 name="twitter" color="#dbdbdb" size={16} />
            </BorderlessButton>

            <Input name="twitter" placeholder="Twitter" />
          </InputView>

          <LastInputView>
            <BorderlessButton onPress={() => Linking.openURL(`http://instagram.com/${contact.instagram}`)}>
              <FontAwesome5 name="instagram" color="#dbdbdb" size={18} />
            </BorderlessButton>

            <Input name="instagram" placeholder="Instagram" />
          </LastInputView>
        </Form>

        <Button onPress={() => formRef.current.submitForm()}>
          <ButtonText>Salvar</ButtonText>
        </Button>

        <CancelButton onPress={handleRemoveContact}>
          <ButtonText>Excluir</ButtonText>
        </CancelButton>

      </Content>
    </Container>
  );
}

export default ContactDetails;