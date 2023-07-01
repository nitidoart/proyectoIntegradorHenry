import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'; //EJERCICIO 3(estados) 2.importar el hook useStates
import axios from 'axios';



function App() {
   const [characters, setCharacters] = useState([]); //EJERCICIO 3(estados) 3,Crea
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const CharactersFiltered = characters.filter (Character => Character.id !== Number(id)) //Number convierte id en numero ya que llega como string y no se podria comparar
      setCharacters(CharactersFiltered); //Aqui se setea el resultado en el estado local de Characters
   };

   return (
      <div className='App' style={{padding:"25px"}}>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
