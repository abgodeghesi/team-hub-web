/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';

import HomeWelcome from '../../components/HomeWelcome';

import leagueIcon from '../../assets/icons/lol-icon.png';
import rocketIcon from '../../assets/icons/rocket-icon.png';
import gtaIcon from '../../assets/icons/gta-v-icon.png';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 70px auto 0;
  @media (max-width: 800px) {
    padding: 8px;
  }
  @media (min-width: 800px) {
    flex-direction: column;
    height: 100vh;
  }
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
        <HomeWelcome />
      </Container>
    </>
  );
};

export default Home;
