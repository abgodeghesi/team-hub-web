import React from 'react';
import styled from 'styled-components';

import discordButton from '../assets/icons/join_discord.png';
import twitchButton from '../assets/icons/join_twitch.png';

import TextMock from '../mock/texts';

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
const HomeCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12;
  border-radius: 5;
`;
const SocialMedia = styled.div`
  margin-top: 24px;
  margin: auto;
  display: flex;
  @media(max-width: 780px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };
},
`;
const SocialButtons = styled.img`
  margin-right: 24px;
  max-height: 50px;
  cursor: pointer;
  margin-bottom: 16px;
  @media(max-width: 780px) {
    margin-right: 0px;
  }
},
`;
const Logo = styled.p`
  color: #f5deb3;
  font-weight: 500;
  font-size: 4em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin-bottom: 24px;
},
`;
const Title = styled.p`
  color: #f5deb3;
  font-size: 2em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0px;
  margin-bottom: 8px;
},
`;
const Intro = styled.p`
  color: #e1e1e1;
  font-size: 1.5em;
  text-align: center;
  text-shadow: 1px 1px black;
  margin: 0px;
  margin-bottom: 16px;
},
`;
const Ruleset = styled.p`
  color: #e1e1e1;
  text-align: left;
  font-size: 1.2em;
  text-shadow: 1px 1px black;
  margin: 0px;
  margin-bottom: 8px;
  font-weight: 500;
  @media (min-width: 800px) {
    padding: 12px;
  }
},
`;
const Footer = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
`;
const Button = styled.button`
  min-width: 300px;
  display: block;
  align-self: center;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid wheat;
  text-align: center;
  background: wheat;
  border-radius: 3px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <HomeCard>
          <Logo>Team Hub Major Gold Tournament</Logo>
          <Intro>
            O TeamHub Major Tournament é a nova série de campeonatos focados em
            trazer uma experiência completamente nova, com limite de elo,
            grandes premiações e transmições ao vivo com muita qualidade e
            conteúdo. A primeira edição ocorrerá neste mês, no período da noite,
            para jogadores OURO e abaixo. Confira os detalhes:
          </Intro>
          <Title>Regras</Title>
          <Ruleset>
            • Para garantir a competitividade, jogadores que terminaram a Ranked
            Season 2020 até ELO Platina 4 ou inferior, estarão elegiveis para
            participar do torneio.
            <br />
            • Jogadores que estiverem no Platina 3 ou acima na Season 2021 não
            poderão participar.
            <br />
            • A administração do TeamHub terá liberdade total em analisar o
            perfil dos jogadores inscritos.
            <br />
            • Smurfs estão explicitamente proibidos e podem levar a
            desclassificação do time a qualquer momento.
            <br />• Será cobrado o valor de 40 reais por equipe (8 reais por
            jogador).
          </Ruleset>
          <Title>Premiação</Title>
          <Ruleset>
            • Todo o valor arrecadado com as inscrições será convertido para a
            premiação do campeonato.
            <br />
            • O valor detalhado será divulgado 24 horas antes do início do
            torneio e dependerá diretamente da quantidade de inscritos.
            <br />• Premiaremos o primeiro colocado e o destaque do campeonato,
            avaliado pelo time da organização.
          </Ruleset>
          <Title>Data e Formato</Title>
          <Ruleset>
            • Dias 14 e 15 de Abril, a partir das 20:00.
            <br />
            • Inscrições até as 12:00 do dia 13 de Abril.
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
          <Button
            as="a"
            href="https://forms.gle/NRvyXW9SuZdM6Fgj6"
            target="_blank"
          >
            REGISTRAR
          </Button>
          <Footer>{TextMock.SocialMedia}</Footer>
          <SocialMedia>
            <SocialButtons alt="" src={discordButton} />
            <SocialButtons alt="" src={twitchButton} />
          </SocialMedia>
        </HomeCard>
      </Container>
    </>
  );
}
