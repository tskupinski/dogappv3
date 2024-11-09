import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import FoodDetail from './pages/FoodDetail';
import FoodJournal from './pages/FoodJournal';
import PrivacyPolicy from './pages/PrivacyPolicy';

const DisclaimerWrapper = () => {
  const location = useLocation();
  const showDisclaimer = ['/', '/search', '/food'].some(path => 
    location.pathname === path || location.pathname.startsWith('/food/')
  );

  return showDisclaimer ? <Disclaimer /> : null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <DisclaimerWrapper />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/food/:slug" element={<FoodDetail />} />
            <Route path="/journal" element={<FoodJournal />} />
            <Route path="/polityka-prywatnosci" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;