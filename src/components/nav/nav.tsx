import { 
  AppBar, 
  Toolbar, 
  Stack,
  Button,
} from '@mui/material';
import { Game } from '../../types/game';

type Props = {
  setChoosenGame: (game: Game) => void,
}

export const Nav: React.FC<Props> = ({
  setChoosenGame 
}) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Stack 
          direction='row' 
          spacing={3}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <Button 
            variant="text" 
            color="inherit"
            onClick={() => setChoosenGame('alphabet')}
          >
            Алфавіт
          </Button>

          <Button 
            variant="text" 
            color="inherit"
            onClick={() => setChoosenGame('animals')}
          >
            Тварин
          </Button>

          <Button variant="text" color="inherit">
            Скоромовки
          </Button>

          <Button variant="text" color="inherit">
            Казки
          </Button>

        </Stack>

      </Toolbar>
    </AppBar>
  )
}

