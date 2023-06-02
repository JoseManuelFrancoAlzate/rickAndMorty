import styled from "./About.module.css"
import {Link} from 'react-router-dom'
 const About= ()=> {
    return(
        <center>
<div>
<img  src='https://thumbs.gfycat.com/ImperfectMenacingEyra-size_restricted.gif' alt="" /> 
<h2 className={styled.letra}>Hola soy Jose Franco y esta es mi app de Rick And Morty</h2>
<h2 className={styled.letra}>Espero les guste mi proyecto</h2>

<h1 className={styled.letra1}>Links</h1>
<img className={styled.img}  src='https://cdn-icons-png.flaticon.com/512/225/225521.png' alt="" /> 

    <p>
    <Link className={styled.letra} to='about'>ir About</Link>
    <Link className={styled.letra} to='from'>ir About</Link>
    </p>
    <Link className={styled.letra} to='home'>ir Home</Link>


</div>
</center>)
}

export default About