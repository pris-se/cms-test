import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import tabsData from './data/tabs.json';
import { Tab } from './components/Tab';
import { Header } from './components/Header';

function App() {
  const defaultTab = tabsData.sort((a, b) => a.order - b.order)[0];
  return (
    <>
      <Router>
        <Header />
        <main className='contant fixed-header'>
          <div className='container'>
            <Routes>
              {tabsData.map((tab) => (
                <Route key={tab.id} path={tab.id} element={<Tab tab={tab} />} />
              ))}
              <Route path="/" element={<Tab tab={defaultTab} />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
