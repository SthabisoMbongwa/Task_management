import './App.css';
import LandingPage from './components/LandingPage';
import VerifyPage from './components/VerifyPage';
import LoginPage from './components/LoginPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='verify' element={<VerifyPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
