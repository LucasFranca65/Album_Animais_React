import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Intro() {
    return(
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Conhecendo os Animais
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Pequeno Album Infantil para Aprender sobre Animais
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Inscreva-se</Button>
              <Button variant="outlined">Doações</Button>
            </Stack>
          </Container>
        </Box>
    )
}

export default Intro;