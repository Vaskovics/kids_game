import { 
  AppBar, 
  Toolbar, 
  Stack,
  Typography, Button,
} from '@mui/material';
// import './nav.scss';

const navArr = ['Алфавіт', 'Звірі', 'Казки', 'Скоромовки'];

export const Nav = () => {
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
          <Button variant="text" color="inherit">
            Алфавіт
          </Button>

          <Button variant="text" color="inherit">
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

