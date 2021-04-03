import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import serverLogo from '../../assets/logos/discord_server_logo.png';

const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
  height: 100vh;
`;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 140px;
`;

const ListItemLogo = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto 60px;
  align-items: center;
  justify-content: center;
  span {
    font-family: Bungee;
    font-size: 14px;
    text-align: center;
    color: white;
  }
`;

const ListItem = styled.li`
  display: flex;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  align-items: center;
  justify-content: center;
  a {
    text-align: center;
    text-decoration: none;
    color: gray;
    &.active, &:hover {
      color: white;
    }
  }
`;

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Agenda",
    href: "/agenda",
  },
  {
    label: "Nossos Jogos",
    href: "/jogos",
  },
  {
    label: "Histórico",
    href: "/historico",
  },
];

const NewHeader = () => (
  <Header>
    <List>
      <ListItemLogo>
        <img src={serverLogo} width="64" />
        <span>Team Hub</span>
      </ListItemLogo>
      {headersData.map(item => (
        <ListItem>
          <NavLink to={item.href} activeClassName="active" exact={true}>
            <span>{item.label}</span>
          </NavLink>
        </ListItem>
      ))}
    </List>
  </Header>
);

export default NewHeader;
