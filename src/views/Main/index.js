import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from '../../Components/NavBar/NavBar';
import MyCards from '../../Components/Cards/MyCards';
import Footer from '../../Components/Footer/Footer'
import Intro from '../../Components/Intro/Intro';


const cards = [
  {
    id: 1,
    image: 'https://cdn.pixabay.com/photo/2023/06/26/13/41/wolf-8089783_1280.jpg',
    title: 'O Lobo',
    text: 'O lobo (também chamado de lobo-cinzento; nome científico: Canis lupus) é uma espécie de mamífero canídeo do gênero Canis.'
  },
  {
    id: 2,
    image: 'https://cdn.pixabay.com/photo/2023/04/07/11/38/gorilla-7906227_1280.jpg' ,
    title: 'O Gorila',
    text: 'Os gorilas são mamíferos primatas pertencentes ao gênero Gorilla, endêmicos das florestas tropicais do centro da África.'
  },
  {
    id: 3,
    image: 'https://cdn.pixabay.com/photo/2023/06/14/05/07/seagull-8062303_1280.jpg' ,
    title: 'A Aguia',
    text: 'A águia é o nome comum dado algumas aves de rapina da família Accipitridae, geralmente de grande porte, carnívoras, de grande acuidade visual.'
  } 
];
const defaultTheme = createTheme()

function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBar/>
      <CssBaseline />      
      <main>
        {/* Hero unit */}
        <Intro/>
        
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <MyCards data={cards}/>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </ThemeProvider>
  )
}

export default Album;
