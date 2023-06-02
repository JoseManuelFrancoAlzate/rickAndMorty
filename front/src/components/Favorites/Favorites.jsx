 import { useSelector, useDispatch} from "react-redux"
import Card from "../Card/Card"
import { orderCards, filterCards } from "../../redux/action"
import styled from "./Favorites.module.css"
 const Favorites = ()=>{
    const {myFavorites} =useSelector(state=>state)
const dispatch = useDispatch()
    const handleOrder =(event)=>{
dispatch(orderCards(event.target.value))
    }
    const handleFilter =(event)=>{
        dispatch(filterCards(event.target.value))
            }
     return(
        <div className={styled.favoriteHeader}>
                     <div>
    <select onChange={handleOrder}>
<option value="Ascendente">Ascendente</option>
<option value="Descendente">Descendente</option>
</select>
<select onChange={handleFilter}>
<option value="Male" >Male</option>
<option value="Female">Female</option>
<option value="Genderless">Genderless</option>
<option value="unknown">unknown</option>
</select>
</div>  
            {
                myFavorites.map(({name,species,gender,image,id})=>{
                    return(
                        <div> 
                 
 <Card 
 key ={id}

id={id}
name={name}
species={species}
 gender={gender}
image={image}

/>

                        </div>
                    )
                })
            }
        </div>
     )
 }

 export default Favorites