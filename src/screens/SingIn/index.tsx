import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoGobarber from '../../assets/logo.svg';
import { Container, Content, Form, Background } from './styles';

const SingIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoGobarber} alt="GoBarber" />
        <Form>
          <h1>Faça o LogOn</h1>
          <input placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <button type="submit">Entrar</button>
          <a>Esqueci minha senha</a>
        </Form>
        <a>
          <FiLogIn />
          Cadastrar
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
