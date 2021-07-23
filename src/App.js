import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Main from './main';

import NewHeader from './components/NewHeader';
import Footer from './components/Footer';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Play', 'Roboto', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NewHeader />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
