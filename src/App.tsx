import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import Items from './components/Items'
import { Provider } from './context/useContext'

function App () {
  return (
    <Provider>
      <Container className="App">
        <Items />
      </Container>
    </Provider>
  )
}

export default App
