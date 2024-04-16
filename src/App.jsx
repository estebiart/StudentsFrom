import { Box, Typography } from '@mui/material';
import {  SearchForm } from './Pages/Search/SearchForm';
import './App.css';

function App() {
  return (
    <Box
      className='App gradient'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'

    >
      <Typography variant='h2' mb='20px' textAlign='center' color=" #1596cf ">
       Talento Tech Cymetria
      </Typography>
      <Typography variant='p' mb='20px' textAlign='center'>
       Conoce tus resultados en el siguiente formulario
      </Typography>
      <SearchForm />
    </Box>
  );
}

export default App;