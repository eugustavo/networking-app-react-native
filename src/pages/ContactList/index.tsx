import React, { useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import QRCode from '../../assets/QRCode.png';
import NoContactBackground from '../../assets/NoContactBackground.png';

import {
  Container,
  Header,
  Title,
  Icon,
  SearchInput,
  SearchInputText,
  ListContact,
  Contact,
  Infos,
  Avatar,
  InfoUser,
  UserName,
  EventName,
  NoContact,
  NoContactText,
  NoContactTextSmall
} from './styles';

export interface ContactProps {
  id: string;
  name: string;
  event: string;
  avatar: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

const ContactList: React.FC = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<ContactProps[]>([]);

  useFocusEffect(() => {
    async function loadContacts() {
      const response = await AsyncStorage.getItem('@contacts');
      setContacts(JSON.parse(response));
    }
    loadContacts();
  });

  // console.log(contacts);

  return (
    <Container>
      <Header>
        <Title>Contatos</Title>

        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
          <Icon source={QRCode} />
        </TouchableOpacity>
      </Header>

      <SearchInput>
        <SearchInputText placeholder="Pesquisar..." />

        <TouchableOpacity>
          <Ionicons name="ios-search" color="#7a7a7a" size={24} />
        </TouchableOpacity>
      </SearchInput>

      {contacts.length === 0 ? (
        <NoContact source={NoContactBackground}>
          <MaterialCommunityIcons name="contacts" color="rgba(255, 255, 255, 0.3)" size={46} />
          <NoContactText>Sem contatos na sua lista</NoContactText>
        </NoContact>
      ):(
        <ListContact
          data={contacts}
          keyExtractor={(item: ContactProps) => String(item.id)}
          renderItem={({ item }) => (
            <Contact onPress={() => navigation.navigate('ContactDetails', { data: item })}>
              <Infos>
                {!!item.avatar ? (
                  <Avatar source={{ uri: item.avatar }} />
                ):(
                  <ActivityIndicator color="#dbdbdb" size={32} />
                )}
                

                <InfoUser>
                  <UserName>{item.name}</UserName>
                  <EventName>{item.event}</EventName>
                </InfoUser>
              </Infos>

              <Feather name="chevron-right" color="#c2c2c2" size={22} />
            </Contact>
          )}
        />
      )}
    </Container>
  );
}

export default ContactList;