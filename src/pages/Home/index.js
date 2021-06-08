import React from 'react';
import styled from 'styled-components';

import GoldIcon from '../../assets/icons/lol-gold-icon.png';
import SilverIcon from '../../assets/icons/lol-silver-icon.png';
import BronzeIcon from '../../assets/icons/lol-bronze-icon.png';

import TextMock from '../../mock/texts';

const DiscordLink = 'https://discord.com/widget?id=808866054272712714';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  @media (max-width: 800px) {
    padding: 5px;
    padding-left: 95px;
  }
  @media (min-width: 800px) {
    padding-left: 140px;
    max-width: 1200px;
  } ;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12;
  border-radius: 5;
`;
const Logo = styled.h1`
  color: #f0cb3a;
  font-weight: 700;
  font-size: 3em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0 auto;
  padding: 4rem 0 2rem 0;
`;
const RanksContainer = styled.section`
  margin: 0 auto;
  display: flex;
`;
const Ranks = styled.img`
  max-height: 200px;
`;
const Title = styled.h3`
  color: #f0cb3a;
  font-weight: 700;
  font-size: 2em;
  text-shadow: 1px 1px black;
  margin: 0 auto;
  padding: 1rem 0;
`;
const Intro = styled.h2`
  color: #ededed;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0 auto;
  padding: 2rem 0;
`;
const Ruleset = styled.p`
  color: #ededed;
  text-align: left;
  font-size: 1.3em;
  text-shadow: 1px 1px black;
  margin: 0px;
  font-weight: 400;
  @media (min-width: 800px) {
    padding: 12px 0;
  }
`;
const Button = styled.button`
  text-decoration: none;
  min-width: 300px;
  display: block;
  padding: 16px;
  margin: 16px auto;
  text-align: center;
  font-weight: 700;
  background: #f0cb3a;
  border-radius: 3px;
  :visited {
    text-decoration: none;
    color: inherit;
  }
  :hover {
    background: wheat;
  }
`;
const Footer = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
  margin: 0 auto;
  padding: 1rem;
`;
const SocialMedia = styled.div`
  margin: 0 auto;
  display: flex;
`;

export default function Home() {
  return (
    <>
      <Container>
        <HomeContainer>
          <Logo>Team Hub Major Tournament: Gold #2</Logo>
          <RanksContainer>
            <Ranks alt="" src={GoldIcon} />
            <Ranks alt="" src={SilverIcon} />
            <Ranks alt="" src={BronzeIcon} />
          </RanksContainer>
          <Intro>
            O Team Hub Major Tournament é a série de campeonatos focados em
            trazer uma experiência completamente nova, com limite de elo,
            grandes premiações e transmições ao vivo com muita qualidade e
            conteúdo. A segunda edição ocorrerá neste mês, no período da noite,
            para jogadores Ouro e abaixo. Confira os detalhes:
          </Intro>
          <Title>Regras</Title>
          <Ruleset>
            • Para garantir a competitividade, jogadores que terminaram a Ranked
            Season 2020 até elo Ouro 1 ou inferior em qualquer fila estarão
            elegíveis para participar do torneio.
            <br />
            • Consequentemente, jogadores que estiverem no Platina 4 ou acima em
            qualquer fila na season atual não poderão participar.
            <br />
            • A administração do Team Hub terá liberdade total em analisar o
            perfil dos jogadores inscritos.
            <br />
            • Smurfs estão explicitamente proibidos e podem levar a
            desclassificação do time a qualquer momento.
            <br />• Será cobrado o valor de 50 reais por equipe (10 reais por
            jogador).
          </Ruleset>
          <Title>Premiação</Title>
          <Ruleset>
            • Todo o valor arrecadado com as inscrições será convertido para a
            premiação do campeonato.
            <br />• O valor detalhado será divulgado 24 horas antes do início do
            torneio e dependerá diretamente da quantidade de inscritos.
          </Ruleset>
          <Title>Data e Formato</Title>
          <Ruleset>
            • Dias 16 e 17 de Junho, a partir das 20:00 horas.
            <br />
            • Inscrições até as 12:00 horas do dia 15 de Junho.
            <br />
            • O formato detalhado dependerá da quantidade total de equipes
            inscritas e será revelado 24 horas antes do início do torneio.
            <br />
            • Garantimos que todas as equipes jogarão mais de uma partida no
            primeiro dia.
            <br />• Priorizaremos um sistema justo onde todas equipes poderão
            mostrar seu valor.
          </Ruleset>
          <Title>Quero participar, mas não tenho um time. E agora?</Title>
          <Ruleset>
            Use os canais de texto do servidor do Discord do TeamHub para
            conversar com a galera e procurar por integrantes! Ou demonstre
            interesse mandando mensagem direta para um de nossos Administradores
            e tentaremos encaixá-lo em alguma equipe.
          </Ruleset>
          <Title>Posso chamar amigos de fora?</Title>
          <Ruleset>
            Sim! O Major Tournament e seus jogadores se beneficiam diretamente
            com a quantidade de equipes registradas. Chame seus amigos,
            convide-os para nosso Discord e compartilhe o nosso evento com
            todos!
          </Ruleset>
          <Button as="a" href="https://forms.gle/6u17zpFG62oYCXGy8">
            REGISTRAR
          </Button>
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
}
