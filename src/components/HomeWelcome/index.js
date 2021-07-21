import React from 'react';
import styled from 'styled-components';

import Freljord from '../../assets/freljord.jpg';

const Main = styled.main`
  width: 100%;
`;

const Background = styled.section`
  background-image: url(${Freljord});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 90vh;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  line-height: 120px;
  justify-content: center;
  padding: 0 8px;
  @media (min-width: 560px) {
    padding: 0 0;
  }
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0 auto;
  font-family: 'Teko', sans-serif;
  color: #f5f5f5;
  font-size: 2rem;
  font-weight: 500;
`;

const H2 = styled.h2`
  padding: 0;
  margin: -30px auto 0;
  font-family: 'Teko', sans-serif;
  color: #f5f5f5;
  font-size: 9rem;
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0 auto;
  color: #f5f5f5;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
`;

const HomeWelcome = () => (
  <Main>
    <Background>
      <TitleDiv>
        <H1>bem-vindo(a) ao</H1>
        <H2>TEAM HUB</H2>
        <H3>
          Sua plataforma virtual de torneios online, com experiência única,
          focada
          <br />
          especialmente nos jogadores. Desfrute de transmissões ao vivo, eventos
          dinâmicos,
          <br />
          competitivos e for fun, tudo no mesmo lugar.
        </H3>
      </TitleDiv>
    </Background>
  </Main>
);

export default HomeWelcome;
