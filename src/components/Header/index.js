import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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
    label: 'Nossos Jogos',
    href: '/jogos',
  },
  {
    label: 'Histórico',
    href: '/historico',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#010f29',
    paddingRight: '79px',
    paddingLeft: '100px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Bungee',
    fontWeight: 100,
    color: '#FFFEFE',
    textAlign: 'left',
    cursor: 'default',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => (
    <Toolbar className={toolbar}>
      {teamhubLogo}
      <div>{getMenuButtons()}</div>
    </Toolbar>
  );

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{teamhubLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () =>
    headersData.map(({ label, href }) => (
      <Link
        {...{
          component: RouterLink,
          to: href,
          color: 'inherit',
          style: { textDecoration: 'none' },
          key: label,
        }}
      >
        <MenuItem>{label}</MenuItem>
      </Link>
    ));

  const teamhubLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Team Hub
    </Typography>
  );

  const getMenuButtons = () =>
    headersData.map(({ label, href }) => (
      <Button
        {...{
          key: label,
          color: 'inherit',
          to: href,
          component: RouterLink,
          className: menuButton,
        }}
      >
        {label}
      </Button>
    ));

  return (
    <AppBar className={header}>
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}
