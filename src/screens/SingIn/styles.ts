import styled from 'styled-components';
import { shade } from 'polished';

import imageBackgroundBarber from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  > a {
    display: flex;
    text-decoration: none;
    color: #ff9000;
    align-items: center;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 16px;
    }
  }
`;
export const Form = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  place-content: center;

  margin: 80px 0;
  width: 340px;
  text-align: center;
  h1 {
    margin-bottom: 24px;
  }

  input {
    padding: 16px;
    background: #232129;
    border: 2px solid #232129;
    border-radius: 10px;
    width: 100%;

    & + input {
      margin-top: 10px;
    }
  }
  button {
    height: 56px;
    background: #ff9000;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    margin-top: 16px;
    font-weight: 500;

    transition: color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  a {
    margin-top: 8px;
    color: #fff;
    text-decoration: none;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${imageBackgroundBarber}) no-repeat center;
  background-size: cover;
  background-color: rgba(49, 46, 56, 0.7);
`;
