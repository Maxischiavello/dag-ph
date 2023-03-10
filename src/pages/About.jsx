import { Avatar, Container, Link } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import instagram from '../utils';

function About() {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      mt: 4
    }}>
      <Box sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography>Bienvenidos! Me presento:</Typography>
        <Typography variant='h1' >
          Diego García
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Avatar
            alt="foto perfil"
            src={require('../assets/perfil.jpg')}
            sx={{
              width: 140,
              height: 140
            }}
          />
        </Box>
        <Typography my={6} style={{
          textAlign: 'start',
          maxWidth: 640
        }} >Soy un apasionado por la fotografía,
          estudié en el Centro de Investigación Cinematográfica (CIC)
          y me especializo en los estilos street y retratos.
          Mi trabajo refleja mi amor por la fotografía y mi habilidad
          para capturar momentos únicos y transmitir emociones.
          Mis fotografías de street son una muestra de mi habilidad
          para capturar la vida cotidiana de la ciudad de Buenos Aires
          y transmitir la energía y el ritmo de la vida urbana.
          Espero que disfrutes mi trabajo.
        </Typography>
          <Link color="inherit" href={instagram} style={{ 
            textDecoration: 'none', 
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            border: '1px white solid'
            }}>
            <Typography variant='body2' ml={2}>Haz click para acceder a mi instagram</Typography>
            <InstagramIcon color='inherit' sx={{my: 2, mx: 2}}/>
          </Link>
      </Box>
    </Container>
  )
}

export default About