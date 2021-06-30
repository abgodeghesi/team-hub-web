/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';

import leagueIcon from '../../assets/icons/lol-icon.png';
import rocketIcon from '../../assets/icons/rocket-icon.png';
import gtaIcon from '../../assets/icons/gta-v-icon.png';

import TextMock from '../../mock/texts';

const DiscordLink = 'https://discord.com/widget?id=808866054272712714';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 800px) {
    padding: 5px;
    padding-left: 95px;
  }
  @media (min-width: 800px) {
    padding-left: 140px;
    max-width: 1200px;
    height: 100vh;
  }
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12;
  border-radius: 5;
`;
const Title = styled.h1`
  color: #f0cb3a;
  font-weight: 700;
  font-size: 3em;
  font-family: Bungee;
  text-shadow: 1px 1px black;
  margin: 0 auto;
  padding: 2rem 0 2rem 0;
`;
const Instructions = styled.h2`
  color: #f0cb3a;
  font-size: 0.8em;
  text-align: center;
  margin: -40px auto 40px;
  padding: 0;
`;
const LogoContainer = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 1em;
  width: 100%;
  justify-content: center;
  animation: fadeIn 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Logo = styled.img`
  max-width: 180px;
  transition: 0.1s;
  margin: 0 20px;
  cursor: pointer;
  :hover {
    scale: calc(1.1);
  }
`;
const GameContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const GameTitle = styled.h3`
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 2em;
  font-family: Bungee;
  color: #f1f1f1;
`;
const GameDetails = styled.p`
  margin: 0 auto;
  padding: 0 0 2.5rem;
  font-size: 1em;
  color: #f1f1f1;
`;
const RegisterButton = styled.button`
  margin: 0 auto;
  padding: 16px;
  min-width: 250px;
  border-radius: 125px;
  text-decoration: none;
  border: none;
`;
const Footer = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
  margin: 2rem auto 0;
  padding: 1rem;
`;
const SocialMedia = styled.div`
  margin: 0 auto;
  padding: 16px;
  display: flex;
`;

const Home = () => {
  const [index, setIndex] = useState('');

  const games = [
    { game: 'League of Legends', logo: leagueIcon },
    { game: 'Rocket League', logo: rocketIcon },
    { game: 'GTA V', logo: gtaIcon },
  ];

  const handleActive = i => {
    setIndex(i);
  };

  return (
    <>
      <Container>
        <HomeContainer>
          <Title>Team Hub Party Week</Title>
          <Instructions>Escolha seu jogo</Instructions>
          <LogoContainer>
            {games.map((item, i) => (
              <Logo
                alt=""
                src={item.logo}
                onClick={() => {
                  handleActive(i);
                }}
              />
            ))}
          </LogoContainer>
          {index === 0 && (
            <GameContainer>
              <GameTitle>League of Legends</GameTitle>
              <GameDetails>
                Modalidade: ARAM
                <br />
                Número máximo de equipes: 8<br />
                Data: 12/12/12
                <br />
                Hora: 12:00
              </GameDetails>
              <RegisterButton>Registrar</RegisterButton>
            </GameContainer>
          )}
          {index === 1 && (
            <GameContainer>
              <GameTitle>Rocket League</GameTitle>
              <GameDetails>
                Modalidade: 3 V 3
                <br />
                Número máximo de equipes: 8<br />
                Data: 12/12/12
                <br />
                Hora: 12:00
              </GameDetails>
              <RegisterButton>Registrar</RegisterButton>
            </GameContainer>
          )}
          {index === 2 && (
            <GameContainer>
              <GameTitle>GTA V</GameTitle>
              <GameDetails>
                Modalidade: Freeplay
                <br />
                Número máximo de players: 8<br />
                Data: 12/12/12
                <br />
                Hora: 12:00
              </GameDetails>
              <RegisterButton>Registrar</RegisterButton>
            </GameContainer>
          )}
          <Footer>
            {TextMock.SocialMedia}
            <SocialMedia>
              <iframe
                src={DiscordLink}
                width="350"
                height="300"
                title="Discord Server"
                allowtransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </SocialMedia>
          </Footer>
        </HomeContainer>
      </Container>
    </>
  );
};

export default Home;
