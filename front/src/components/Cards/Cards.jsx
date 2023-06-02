import Card from '../Card/Card';
import styled from "./Cards.module.css"

export default function Cards({characters,onClose}) {
   
   return <div className={styled.CardContainer}>
      
{characters.map(({name,species,gender,image,id})=>{

return(
<Card 
key ={id}
id={id}
name={name}
species={species}
 gender={gender}
image={image}
onClose={onClose}
/>
   

) 

})}


   </div>;
}

/*

  <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>

*/