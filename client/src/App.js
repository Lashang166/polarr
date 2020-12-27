import Routes from "./routes";
import {BrowserRouter as Router } from 'react-router-dom';
import MainContextProvider from "./context/MainContext";



function App() {
  return (
      <Router>
        <MainContextProvider>
          <Routes />
        </MainContextProvider>
      </Router>
  );
}

export default App;
