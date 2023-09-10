import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Nav } from './components/nav/nav';
import './App.scss';
import './utils/reset.scss';
import Card from './components/card/Card';
import { CardType } from './types/CardType';
import { getRandomIndex } from './utils/helpers';
import { lettersImg } from './data/lettersImg';
import { Game } from './types/game';
import { helloObj } from './data/hello';
import { animalsImg } from './data/animalsImg';


function App() {
  const [choosenGame, setChoosenGame] = useState<Game | null>(null);
  const [cards, setCards] = useState<CardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [homeCard, setHomeCard] = useState<CardType | null>(helloObj);
  const [prevLetter, setPrevLetter] = useState<CardType | null>(null);

  console.log(homeCard);

  const handleNextLetter = () => {
    const randomIndex = getRandomIndex(cards);
    setPrevLetter(selectedCard);
    setSelectedCard(cards[randomIndex]);
  }

  const handlePrevLetter = () => {
    setSelectedCard(prevLetter);
  }

  useEffect(() => {

    if (choosenGame === 'alphabet') {
      setSelectedCard(lettersImg[0]);
      setCards(lettersImg);
      setHomeCard(null);
    }

    if (choosenGame === 'animals') {
      setSelectedCard(animalsImg[0]);
      setCards(animalsImg);
      setHomeCard(null);
    }

  }, [choosenGame]);

  return (
      <Box className='container'>

        {homeCard ? (
          <Card
          selectedCard={homeCard}
          onNextLetter={handleNextLetter}
          onPrevLetter={handlePrevLetter}
          homeCard={homeCard}
        />
        ) : (
          <Card
            selectedCard={selectedCard}
            onNextLetter={handleNextLetter}
            onPrevLetter={handlePrevLetter}
            homeCard={homeCard}
        />
        )}



        <Stack className="bottomNav">
          <Nav
            setChoosenGame={setChoosenGame}
          />
        </Stack>
      </Box>
  );
}

export default App;

