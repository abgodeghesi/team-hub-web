import './App.css';
import Main from './main';

import Header from './components/UI/Header.js'


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Bg">
        <Main />
      </div>
    </div>
  );
}

export default App;
