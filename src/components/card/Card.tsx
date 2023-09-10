import React from 'react';
import { CardType } from '../../types/CardType';
import { Stack, Button } from '@mui/material';

type Props = {
  selectedCard: CardType | null,
  onNextLetter: () => void,
  onPrevLetter: () => void,
  homeCard: CardType | null,
}

const CardList: React.FC<Props> = ({
  selectedCard: selectedLetter,
  onNextLetter,
  onPrevLetter,
  homeCard
}) => {
  console.log(homeCard)
  return (
    <div className='content'>
      <figure className='content__figure'>
        <img
          className='content__image'
          title="PDF Viewer"
          width="100%"
          src={selectedLetter?.src}
          alt={selectedLetter?.name}
        />
      
        {selectedLetter && selectedLetter?.name.length > 1 && (
          <figcaption className='content__name'>{selectedLetter?.name}</figcaption>
        )}
      </figure>
      

      {homeCard ? null : (
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
      )}
    </div>
  )
}

export default CardList
