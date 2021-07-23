import React from 'react';
import styled from 'styled-components';
import {
  GiOpenTreasureChest,
  GiThreeFriends,
  GiTrophy,
  GiConsoleController,
  GiOldMicrophone,
  GiLaurelCrown,
} from 'react-icons/gi';

const GridContainer = styled.section`
  width: 100%;
  display: grid;
  padding: 0 12px;
  justify-content: center;
  grid-auto-flow: auto;
  grid-gap: 12px;
  grid-template-columns: repeat(autofill, minmax(100px, 1fr));
  @media (min-width: 1024px) {
    grid-gap: 24px;
    grid-template-columns: repeat(8, 100px);
  }
`;

const PerkCard = styled.div`
  display: flex;
  padding: 24px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  grid-column: span 4;
  background-color: #5da3ac;
  color: #f5f5f5;
`;

const PerkTitle = styled.h1`
  padding: 0 0 16px;
  margin: 0;
  font-family: 'Teko';
  font-size: 1.8rem;
  letter-spacing: 1.1px;
`;

const PerkDescription = styled.h2`
  padding: 0 0 16px;
  margin: 0;
  font-family: 'Roboto';
  font-size: 0.95rem;
  font-weight: 400;
`;

const PerkIcon = styled.div`
  color: #35ff69;
`;

const PerkGrid = () => {
  const perks = [
    {
      title: 'Campeonatos',
      description:
        'Eventos mensais competitivos e casuais para jogadores de todos os níveis',
      icon: <GiTrophy size="70" />,
    },
    {
      title: 'Premiações',
      description:
        'Diversos tipos de recompensas para participantes e vencedores',
      icon: <GiOpenTreasureChest size="70" />,
    },
    {
      title: 'Transmissões ao Vivo',
      description:
        'Com direito à narração e comentários dos nossos streamers parceiros',
      icon: <GiOldMicrophone size="70" />,
    },
    {
      title: 'Hall da Fama',
      description:
        'Vença um torneio e tenha sua equipe imortalizada no nosso Hall da Fama',
      icon: <GiLaurelCrown size="70" />,
    },
    {
      title: 'Leque de Games',
      description:
        'Organizamos eventos para todos os jogos mais populares do momento',
      icon: <GiConsoleController size="70" />,
    },
    {
      title: 'Comunidade',
      description:
        'Participe do nosso servidor de Discord e fique por dentro de todas novidades',
      icon: <GiThreeFriends size="70" />,
    },
  ];

  return (
    <GridContainer>
      {perks.map(perk => (
        <PerkCard>
          <PerkTitle>{perk.title}</PerkTitle>
          <PerkDescription>{perk.description}</PerkDescription>
          <PerkIcon>{perk.icon}</PerkIcon>
        </PerkCard>
      ))}
    </GridContainer>
  );
};

export default PerkGrid;
