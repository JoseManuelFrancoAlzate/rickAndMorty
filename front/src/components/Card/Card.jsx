import styled from "./Card.module.css"
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite,deleteFavorite } from "../../redux/action";

export default function Card({id,name,species,gender,image,onClose}) {
   const dispatch = useDispatch(); 
   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false);
const handleFavorite = ()=>{
 if(isFav){
   setIsFav(false);
   dispatch(deleteFavorite(id))
 } else {
   setIsFav(true);
   dispatch(addFavorite({id,name,species,gender,image,onClose}))
 }}

 useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


   return (
      <div className={styled.container}>
      {  
isFav ? (
   <button onClick={handleFavorite}>❤️</button>
) : (
   <button onClick={handleFavorite}>🤍</button>
)
}
   <button className={styled.boton} onClick={()=>onClose(id)}>AREPA GALACTICA</button>
   <Link to={`/detail/${id}`}>
    <h2 className={styled.letra}>{name}</h2>
      <h2 className={styled.letra}>{species}</h2>
      <h2  className={styled.letra}>{gender}</h2> 
      <img  src={image} alt="" /> 
      </Link>
   </div>
   );
}