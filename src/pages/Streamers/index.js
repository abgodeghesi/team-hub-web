import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #2a529c;
  padding: 6rem;
  justify-content: center;
`;

const ConstructionTitle = styled.h1`
  padding: 0;
  margin: 0 auto;
  font-family: 'Teko';
  font-size: 6rem;
  text-align: center;
  color: #f5f5f5;
`;

const Streamers = () => (
  <Container>
    <ConstructionTitle>
      Em breve no
      <br />
      Team Hub
    </ConstructionTitle>
  </Container>
);

export default Streamers;
