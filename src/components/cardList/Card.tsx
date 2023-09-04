import React, { useEffect, useState } from 'react';
import { Letter } from '../../types/Letter';
import { lettersImg } from '../../data/lettersImg';
import { Stack, Button } from '@mui/material';
import { getRandomIndex } from '../../utils/helpers';


const CardList = () => {
  const [letters, setLetters] = useState<Letter[]>([]);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [prevLetter, setPrevLetter] = useState<Letter | null>(null);


  const handleNextLetter = () => {
    const randomIndex = getRandomIndex(letters);
    setPrevLetter(selectedLetter);
    setSelectedLetter(letters[randomIndex]);
  }

  const handlePrevLetter = () => {
    setSelectedLetter(prevLetter);
  }

  useEffect(() => {
    setSelectedLetter(lettersImg[0]);
    setLetters(lettersImg);
  }, []);

  console.log(selectedLetter)
  return (
    <div className='content'>
      <figure>
        <img
          title="PDF Viewer"
          width="100%"
          src={selectedLetter?.src}
          alt={selectedLetter?.name}
        />
      </figure>
      
      <Stack 
        direction='row'
        spacing={2}
        className="bottom"
      >
        <Button
          variant='contained'
          onClick={() => handlePrevLetter()}
        >
          Попередня
        </Button>
        <Button
          variant='contained'
          onClick={() => handleNextLetter()}
        >
          Наступна
        </Button>

      </Stack>
    </div>
  )
}

export default CardList
