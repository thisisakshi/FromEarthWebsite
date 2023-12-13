import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductPage } from './pages/ProductPage';
import { OilSoapsPage } from './pages/OilSoapsPage';
import { GlycerinSoapsPage } from './pages/GlycerinSoapsPage';
import { CandlesPage } from './pages/CandlesPage';
import { GiftingPage } from './pages/GiftingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/product/:id" Component={ProductPage} />
        <Route path="/oil-soaps" Component={OilSoapsPage} />
        <Route path="/glycerin-soaps" Component={GlycerinSoapsPage} />
        <Route path="/candles" Component={CandlesPage} />
        <Route path="/gifting" Component={GiftingPage} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
