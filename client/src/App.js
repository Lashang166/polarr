import Routes from "./routes";
import {BrowserRouter as Router } from 'react-router-dom';
import MainContextProvider from "./context/MainContext";
import Toast from './components/Toast'
import Footer from "./components/Footer";


function App() {
  return (
      <Router>
        <MainContextProvider>
          <Routes />
          <Footer />
          <Toast />   
        </MainContextProvider>
      </Router>
  );
}

export default App;
