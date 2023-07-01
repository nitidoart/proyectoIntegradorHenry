import styles from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({ onSearch }) {

   const [id, setId] = useState(''); //Id es mi estado local 

   const handleChange = (event) => {
      setId(event.target.value); //Setiar el estado
   };


   return (
      <div className={styles.container}>

         <input type='search' onChange={handleChange} value={id}/>
         <button className={styles.btn} onClick= {() => onSearch(id)}>Add</button>
                                             {/* ↑ Esto es una funcion que ejecuta onSearch */}
         {/* Le decimos al boton que cuando se le de click ejecute la funcion onSearch          */}
          
      </div>
   );
}



