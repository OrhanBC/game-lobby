import { useContext, useState } from 'react';
import { ColorContext } from './context/ColorContext'
import Panels from './components/Panels';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'


import { Container, Typography } from '@mui/material';



function App() {

  const [colors, setColors] = useState([
    {
      id: 1,
      color: 'red',
      select: false
    },
    {
      id: 2,
      color: 'blue',
      select: false
    },
    {
      id: 3,
      color: 'yellow',
      select: false
    },
    {
      id: 4,
      color: 'green',
      select: false
    },
    {
      id: 5,
      color: 'pink',
      select: false
    }
  ])

  

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Link to='/lobby'>Go to lobby</Link>}/>
        <Route path='/lobby' element={
          <Container>
          <Typography variant='h2'component='h1' align='center'>Game Lobby</Typography>
          <ColorContext.Provider value = { {colors, setColors} }>
            <Panels/>
          </ColorContext.Provider>

        </Container>
        }/>
        
        
      </Routes>
    </Router>
    
  );
}

export default App;
