import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.js';

import './Login.jsx';
import './Register.jsx';
import './pages/home/Home.jsx';
import './pages/hotel/Hotel.jsx';

import './index.js';
import './assets';
import './components/searchList/SearchList.jsx';
import './components/searchItem/SearchItem.jsx';
import './components/propertyList/PropertyList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)