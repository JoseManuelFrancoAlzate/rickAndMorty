import {useState} from 'react'
import styled from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [character,setCharacter] = useState('')

   const handleChange =(event) =>{
setCharacter(event.target.value)
   }
   return (
      <div>
 <input className={styled.searchInput}type='search' value={character} onChange={handleChange}/>
      <button className={styled.searchButton}onClick={()=>onSearch(character)}>Agregar</button> 
      </div>
   );
}
