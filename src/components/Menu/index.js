import React from 'react';

import QRCode from 'react-native-qrcode';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutbutton,
  SignOutbuttonText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode value="https://www.google.com.br/" size={80} bgColor="#8B10AE" fgColor="#FFF" />
      </Code>

      <Nav>
        <NavItems>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutbutton onPress={() => {}}>
        <SignOutbuttonText>SAIR DO APP</SignOutbuttonText>
      </SignOutbutton>
    </Container>
  );
}
