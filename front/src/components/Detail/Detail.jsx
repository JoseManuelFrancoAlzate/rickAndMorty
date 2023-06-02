import styled from "./Detail.module.css"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Detail = () => {

    const {detailId} = useParams();

    const [character,setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

return(
    <center>
<div>
    <h1 className={styled.letraName}>{character?.name}</h1> 
    <p className={styled.letraName}>STATUS:{character?.status}</p>
    <p className={styled.letraName}>ESPECIE:{character?.species}</p>
    <p className={styled.letraName}>GENERO:{character?.gender}</p>
    <p className={styled.letraName}>ORIGIN:{character?.origin?.name}</p>
    <img src={character?.image} alt={character.name}/>
<p>
    <button>
    <Link className={styled.letraName} to='home'>ir Home</Link>
    </button>
    </p>
</div>
</center>)

}


export default Detail


//`https://rickandmortyapi.com/api/character/${detailId}`