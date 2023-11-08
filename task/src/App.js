import './App.css';
import LandingPage from './components/LandingPage';
import VerifyPage from './components/VerifyPage';
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='verifypage' element={<VerifyPage />} />
      </Routes>
      {/* <LandingPage />
      <VerifyPage /> */}
    </div>
  );
}

export default App;
