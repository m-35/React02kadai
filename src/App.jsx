import { useState } from 'react'
import './App.css'
import background from "./assets/images/hero_img.jpg"
import Header from './components/Header/index.jsx'
import Button from './components/Button.jsx'
import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const App = () => (
  <div>
    <Button>Button</Button>
  </div>
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundImage:`url(${background})`}}>
    <Header />
    <Button />
    </div>
  )
}

export default App
