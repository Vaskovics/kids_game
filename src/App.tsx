import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Nav } from './components/nav/nav';
import './App.scss';
import './utils/reset.scss';
import CardList from './components/card/Card';
import { Letter } from './types/Letter';
import { getRandomIndex } from './utils/helpers';
import { lettersImg } from './data/lettersImg';
import { Game } from './types/game';
import { hello } from './data/hello';
import { animalsImg } from './data/animalsImg';


function App() {
  const [choosenGame, setChoosenGame] = useState<Game | null>(null);
  const [cards, setCards] = useState<Letter[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(hello);
  const [prevLetter, setPrevLetter] = useState<Letter | null>(null);


  const handleNextLetter = () => {
    const randomIndex = getRandomIndex(cards);
    setPrevLetter(selectedLetter);
    setSelectedLetter(cards[randomIndex]);
  }

  const handlePrevLetter = () => {
    setSelectedLetter(prevLetter);
  }

  useEffect(() => {

    if (choosenGame === 'alphabet') {
      setSelectedLetter(lettersImg[0]);
      setCards(lettersImg);
    }

    if (choosenGame === 'animals') {
      setSelectedLetter(animalsImg[0]);
      setCards(animalsImg);
    }

  }, [choosenGame]);

  return (
      <Box className='container'>
        <CardList
          selectedCard={selectedLetter}
          onNextLetter={handleNextLetter}
          onPrevLetter={handlePrevLetter}
        />
        <Stack className="bottomNav">
          <Nav
            setChoosenGame={setChoosenGame}
          />
        </Stack>
      </Box>
  );
}

export default App;

