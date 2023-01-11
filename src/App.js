import Navbar from './components/Header/Navbar';
import Gallery from './pages/Gallery';
import About from './pages/About'
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
            <Route index element={<Gallery />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
