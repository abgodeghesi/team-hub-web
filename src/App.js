import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import Main from './main';

import Header from './components/Header'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Play',
      'Roboto',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
