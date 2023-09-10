import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Nav } from './components/nav/nav';
import './App.scss';
import './utils/reset.scss';
import CardList from './components/card/Card';
import { CardType } from './types/CardType';
import { getRandomIndex } from './utils/helpers';
import { lettersImg } from './data/lettersImg';
import { Game } from './types/game';
import { helloObj } from './data/hello';
import { animalsImg } from './data/animalsImg';


function App() {
  const [choosenGame, setChoosenGame] = useState<Game | null>(null);
  const [cards, setCards] = useState<CardType[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<CardType | null>(null);
  const [homeCard, setHomeCard] = useState<CardType | null>(helloObj);
  const [prevLetter, setPrevLetter] = useState<CardType | null>(null);


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

    setHomeCard(null);

  }, [choosenGame]);

  return (
      <Box className='container'>
        <CardList
          selectedCard={selectedLetter}
          onNextLetter={handleNextLetter}
          onPrevLetter={handlePrevLetter}
          homeCard={homeCard}
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

