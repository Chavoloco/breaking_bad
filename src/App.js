import React ,{useState} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Button = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  color: #fff;
  padding: 1rem 3rem;
  margin-top: 3rem;
  border: 2px solid black;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  transition: background-size 1s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
    border: 2px solid white;
    color: black;
  }
  `

function App() {
  //state de frase
  const [frase, guardarFrase] = useState({})

  const consultarApi = async () =>{
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    console.log(frase);
    guardarFrase(frase[0])
  }

  return (
    <Container>
      <Frase 
        frase={frase} 
      />
      <Button
        onClick={consultarApi}>
        Obtener Frase
      </Button>
    </Container>
  );
}

export default App;
