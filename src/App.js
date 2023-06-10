import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import About from './pages/About';
import Contact from './pages/Contact';
import Advertise from './pages/Advertise';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/privacy/policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms/condition' element={<TermsConditions/>}/>
        <Route path='/about/us' element={<About/>}/>
        <Route path='/contact/us' element={<Contact/>}/>
        <Route path='/user/advertisement' element={<Advertise/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
