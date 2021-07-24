import React from 'react';
import styled from 'styled-components';

import Freljord from '../../assets/freljord.jpg';
import Dust2 from '../../assets/bg-dust2.jpg';
import Rocket from '../../assets/rocket-wallpaper.jpg';

const Main = styled.main`
  width: 100%;
`;

const Background = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  line-height: 120px;
  justify-content: center;
  padding: 0 12px 0;
  @media (min-width: 768px) {
    padding: 0 0;
  }
`;

const H1 = styled.h1`
  padding: 0;
  font-family: 'Teko', sans-serif;
  color: #f5f5f5;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 8px 0 0;
  @media (min-width: 560px) {
    text-align: center;
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  padding: 0;
  margin: -60px 0 0;
  font-family: 'Teko', sans-serif;
  color: #f5f5f5;
  font-size: 5rem;
  padding: 8px 0 0;
  @media (min-width: 560px) {
    text-align: center;
    font-size: 9rem;
  }
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0 auto;
  color: #f5f5f5;
  max-width: 60ch;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 0 0;
  text-shadow: 1px 1px black;
  @media (min-width: 560px) {
    text-align: center;
  }
`;

const HomeWelcome = () => {
  const bgs = [Freljord, Rocket, Dust2];

  const selectBG = bgs[Math.floor(Math.random() * bgs.length)];

  return (
    <Main>
      <Background style={{ backgroundImage: `url(${selectBG})` }}>
        <TitleDiv>
          <H1>bem-vindo(a) ao</H1>
          <H2>TEAM HUB</H2>
          <H3>
            Sua plataforma de e-Sports online com experiência única, focada
            especialmente nos jogadores. Desfrute de transmissões ao vivo,
            eventos dinâmicos, competitivos e for fun, tudo no mesmo lugar.
          </H3>
        </TitleDiv>
      </Background>
    </Main>
  );
};

export default HomeWelcome;
