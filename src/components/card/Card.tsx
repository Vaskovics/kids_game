import React from 'react';
import { Letter } from '../../types/Letter';
import { Stack, Button } from '@mui/material';

type Props = {
  selectedCard: Letter | null,
  onNextLetter: () => void,
  onPrevLetter: () => void,
}

const CardList: React.FC<Props> = ({
  selectedCard: selectedLetter,
  onNextLetter,
  onPrevLetter,
}) => {
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
      
        {selectedLetter && selectedLetter?.name.length > 1 && (
          <figcaption className='content__name'>{selectedLetter?.name}</figcaption>
        )}
      </figure>
      
      <Stack 
        direction='row'
        spacing={2}
        className="bottom"
      >
        <Button
          variant='contained'
          onClick={() => onPrevLetter()}
        >
          Попередня
        </Button>
        <Button
          variant='contained'
          onClick={() => onNextLetter()}
        >
          Наступна
        </Button>

      </Stack>
    </div>
  )
}

export default CardList
