import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { Nav } from './components/nav/nav';
import './App.scss';
import './utils/reset.scss';
import Card from './components/card/Card';
import { CardType } from './types/CardType';
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);


  const handleNextCard = () => {
    setPrevLetter(selectedCard);

    
    setCurrentIndex(currentInx => {
      if (currentInx === cards.length - 1) {
        return 0;
      } else {
        return currentInx + 1;
      }
    });


    setSelectedCard(cards[currentIndex]);
  }

  const handlePrevLetter = () => {
    setSelectedCard(prevLetter);
  }

  useEffect(() => {
    setSelectedCard(cards[currentIndex]);
  }, [currentIndex, cards]);

  useEffect(() => {

    if (choosenGame === 'alphabet') {
      setSelectedCard(lettersImg[currentIndex]);
      setCards([...lettersImg]);
      setHomeCard(null);
      setCurrentIndex(0);
    }

    if (choosenGame === 'animals') {
      setSelectedCard(animalsImg[currentIndex]);
      setCards([...animalsImg]);
      setHomeCard(null);
      setCurrentIndex(0);
    }

  }, [choosenGame]);

  console.log(currentIndex, selectedCard);

  return (
      <Box className='container'>

        {homeCard ? (
          <Card
          selectedCard={homeCard}
          onNextLetter={handleNextCard}
          onPrevLetter={handlePrevLetter}
          homeCard={homeCard}
        />
        ) : (
          <Card
            selectedCard={selectedCard}
            onNextLetter={handleNextCard}
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

