import React from 'react';
import styled from 'styled-components';

import streamersvg from '../../assets/icons/partner-streamer.svg';

const Container = styled.main`
  display: flex;
  width: 100%;
  background-color: #5da3ac;
  padding: 4rem 12px;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const Title = styled.h1`
  padding: 0 0 12px;
  font-family: 'Teko';
  margin: 0;
  color: #00091a;
  font-size: 4rem;
  line-height: 60px;
  @media (min-width: 768px) {
    text-align: center;
    padding: 0 0 4rem;
  }
`;

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (min-width: 768px) {
    gap: 32px;
    flex-direction: row;
    padding: 0 16px;
  }
`;

const Illustration = styled.img`
  max-width: 250px;
  padding: 24px 0;
  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Description = styled.h2`
  padding: 0 0 32px;
  margin: 0;
  color: white;
  font-family: 'Roboto';
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5em;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Btn = styled.a`
  align-self: center;
  border-radius: 25px;
  text-decoration: none;
  background-color: #35ff69;
  font-family: 'Roboto';
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #00091a;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  max-height: 50px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StreamPartners = () => (
  <Container>
    <Title>SEJA UM STREAMER PARCEIRO</Title>
    <Content>
      <Illustration src={streamersvg} alt="" />
      <DescriptionDiv>
        <Description>
          Sendo um parceiro do Team Hub você garante benefícios inéditos!
          Incluindo a possibilidade de transmitir ao vivo nossos torneios,
          sorteios exclusivos para os viewers antenados, canal de divulgação
          automático no nosso Discord e um card pessoal na nossa página de
          Streamers.
        </Description>
        <Btn>Saiba mais</Btn>
      </DescriptionDiv>
    </Content>
  </Container>
);

export default StreamPartners;
