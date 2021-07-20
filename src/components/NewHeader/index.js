import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background: #00091a;
  width: 100%;
  position: fixed;
  padding: 8px 12px 0;
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
    &:hover {
      box-shadow: 0px 2px #f4ff8c;
      padding-bottom: 8px;
    }
    &.active {
      color: #f4ff8c;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 125px;
`;

const RegisterButton = styled.a`
  align-self: center;
  border-radius: 25px;
  text-decoration: none;
  background-color: #f5f5f5;
  font-family: 'Roboto';
  font-weight: bold;
  letter-spacing: 0.1em;
  color: #00091a;
  padding: 12px 16px;
  border: none;
  cursor: pointer;
  max-height: 50px;
  &:hover {
    background-color: #f4ff8c;
  }
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
        <RegisterButton
          onClick={() => {
            window.open('https://teamhub.netlify.com/registrar');
          }}
        >
          <span>Registrar</span>
        </RegisterButton>
      </ButtonContainer>
    </List>
  </Header>
);

export default NewHeader;
