import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Button from '../Button';

const Header = styled.header`
  background: #00091a;
  width: 100%;
  position: fixed;
  padding: 4px 12px 0;
  z-index: 9999;
`;

const List = styled.ul`
  list-style-type: none;
  max-width: 1400px;
  padding: 0;
  margin: 0 auto;
  display: flex;
`;

const ListItemLogo = styled.li`
  display: flex;
  span {
    font-family: 'Teko';
    font-size: 2.5rem;
    font-weight: 500;
    color: #f5f5f5;
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  margin: 0 16px;
  align-items: center;
  a {
    text-decoration: none;
    font-family: 'Roboto';
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #f5f5f5;
    &.active,
    :hover {
      box-shadow: 0px 2px #35ff69;
      padding-bottom: 8px;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 125px;
`;

const headersData = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Agenda',
    href: '/agenda',
  },
  {
    label: 'Jogos',
    href: '/jogos',
  },
  {
    label: 'Streamers',
    href: '/streamers',
  },
];

const NewHeader = () => (
  <Header>
    <List>
      <ListItemLogo>
        <span>Team Hub</span>
      </ListItemLogo>
      <ListItemContainer>
        {headersData.map(item => (
          <ListItem>
            <NavLink to={item.href} activeClassName="active" exact>
              <span>{item.label}</span>
            </NavLink>
          </ListItem>
        ))}
      </ListItemContainer>
      <ButtonContainer>
        <Button
          primary
          onClick={() => {
            window.open('https://teamhub.netlify.com/registrar');
          }}
        >
          <span>Registrar</span>
        </Button>
      </ButtonContainer>
    </List>
  </Header>
);

export default NewHeader;
