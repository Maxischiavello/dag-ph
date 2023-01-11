import Navbar from './components/Header/Navbar';
import HomeDisplay from './pages/Home/HomeDisplay';
import GalleryDisplay from './pages/Gallery/GalleryDisplay'
import { Container } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth={false} disableGutters >
          <Navbar />
          <Routes>
            <Route index element={<HomeDisplay />} />
            <Route path='/gallery' element={<GalleryDisplay />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
