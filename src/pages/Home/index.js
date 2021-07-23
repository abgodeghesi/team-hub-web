/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

import HomeWelcome from '../../components/HomeWelcome';
import PerkGrid from '../../components/PerkGrid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 60px auto 0;
`;

const PerksContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 0;
  background-color: #f5f5f5;
`;

const PerkTitle = styled.h1`
  padding: 0 0 12px 12px;
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

const Home = () => {
  return (
    <>
      <Container>
        <HomeWelcome />
        <PerksContainer>
          <PerkTitle>VANTAGENS EXCLUSIVAS DO TEAM HUB</PerkTitle>
          <PerkGrid />
        </PerksContainer>
      </Container>
    </>
  );
};

export default Home;
