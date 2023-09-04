import React from 'react';
import { Stack } from '@mui/material';
import { Nav } from './components/nav/nav';
import './App.css';
import './utils/reset.scss';
import CardList from './components/cardList/Card';

function App() {
  return (
    <div className="App">
      <CardList />
      <Stack className="bottomNav">
        <Nav />
      </Stack>
    </div>
  );
}

export default App;

