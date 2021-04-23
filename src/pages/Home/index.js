import React from 'react';
import styled from 'styled-components';

import discordButton from '../../assets/icons/join_discord.png';
import twitchButton from '../../assets/icons/join_twitch.png';
import trophyIcon from '../../assets/icons/trophy-svgrepo-com.svg';

import TextMock from '../../mock/texts';

const Container = styled.div`
  margintop: 84;
  display: flex;
  justifycontent: center;
  width: 100%;
  margin: auto;
  @media (max-width: 800px) {
    padding-left: 90px;
  }
  @media (min-width: 800px) {
    padding-left: 140px;
    max-width: 88%;
  } ;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12;
  border-radius: 5;
`;
const ChampContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px;
  userselect: none;
  color: #e1e1e1;
  align-self: center;
`;
const TeamsContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  > * {
    flex-basis: 100%;
    color: #e1e1e1;
  }
`;
const CardTitle = styled.h1`
  text-align: center;
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px black;
  padding: 1px;
  margin: 0px;
`;
const CardLogo = styled.img`
  max-height: 110px;
  margin-bottom: 16px;
`;
const CardDetails = styled.h2`
  margin-bottom: 8px;
  text-shadow: 1px 1px black;
  text-align: center;
  font-weight: 400;
`;
const Placing = styled.h2`
  ]margin: 0px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;
const Highlights = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding-top: 16px;
`;
const SocialMedia = styled.div`
  margin-top: 24px;
  margin: auto;
  display: flex;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } ;
`;
const SocialButtons = styled.img`
  margin-right: 24px;
  max-height: 50px;
  cursor: pointer;
  margin-bottom: 16px;
  @media (max-width: 780px) {
    margin-right: 0px;
  }
`;
const Logo = styled.p`
  color: #f5deb3;
  font-weight: 500;
  font-size: 4em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin-bottom: 24px;
`;
const Title = styled.p`
  color: #f5deb3;
  font-size: 2em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0px;
  margin-bottom: 8px;
`;
const Intro = styled.p`
  color: #e1e1e1;
  font-size: 1.5em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0px;
  margin-bottom: 16px;
`;
const Footer = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
`;

export default function Home() {
  return (
    <>
      <Container>
        <HomeContainer>
          <Logo>Resumo do Torneio de Rocket League</Logo>
          <Intro>
            O Team Hub organizou seu primeiro torneio de Rocket League no dia
            01/04, focado exclusivamente em iniciantes. Perdeu a inscrição e
            ficou de fora da nossa stream? Confira o resumão das classificações
            e assista ao vídeo de melhores momentos na íntegra!
          </Intro>
          <Highlights>
            <iframe
              width="640"
              height="340"
              src="https://www.youtube.com/embed/UG7XPXnQzT0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Highlights>
          <Title>Classificação</Title>
          <ChampContainer>
            <CardLogo src={trophyIcon} />
            <CardTitle>Chuck Confeiteros</CardTitle>
            <CardDetails>psChuck - Marvis - Arthuzi</CardDetails>
          </ChampContainer>
          <TeamsContainer>
            <div>
              <Placing>2º Lugar</Placing>
              <CardTitle>Torettos</CardTitle>
              <CardDetails>LeoEloizo - Makkz - Jotta</CardDetails>
            </div>
            <div>
              <Placing>3º Lugar</Placing>
              <CardTitle>Filhos de Marcos</CardTitle>
              <CardDetails>Pater - Chuca Pabra - Rafabracht</CardDetails>
            </div>
            <div>
              <Placing>4º Lugar</Placing>
              <CardTitle>Vasco</CardTitle>
              <CardDetails>Tigas - Carneiro - FabioVieira1</CardDetails>
            </div>
            <div>
              <Placing>5º Lugar</Placing>
              <CardTitle>Rocket Power</CardTitle>
              <CardDetails>dcbarros - GabFP - Celao</CardDetails>
            </div>
          </TeamsContainer>
          <Footer>{TextMock.SocialMedia}</Footer>
          <SocialMedia>
            <SocialButtons alt="" src={discordButton} />
            <SocialButtons alt="" src={twitchButton} />
          </SocialMedia>
        </HomeContainer>
      </Container>
    </>
  );
}
