import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form.jsx'
import {useState} from 'react'
import {Routes,Route,useLocation,useNavigate} from "react-router-dom"
import {useEffect} from 'react'
import Favorites from './components/Favorites/Favorites'
function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters,setCharacters] = useState([])
  const [access,setAccess] = useState(false)
  
const username = 'josemanuel@gmail.com'
const password = 'rick123morty'

const login = (userData)=>{
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate('/home');
 }
}
 useEffect(() => {
  !access && navigate('/');
}, [access]);

const onSearch = (id) => {
  const URL_BASE = "http://localhost:3001";
  // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

  if (characters.find((char) => char.id === id)) {
    return alert("Personaje repetido");
  }

  fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Algo salió mal");
      }
    });
};

  const onClose = (id)=>{
setCharacters(
 
  characters.filter(character => character.id !== id)
)
  }
  return (
    <center className='App' style={{ padding: '210px' }}>
    <div >
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
    
 <Routes>
  <Route path='home' element={<Cards onClose={onClose} characters={characters} />}/>
  <Route path='about' element={<About/>}/>
  <Route path='/detail/:detailId' element={<Detail/>}/> 
  <Route path='favorites' element={<Favorites/>}/> 

 </Routes>
 
    </div>
    </center>
  )
}

export default App

//`http://localhost:3001/rickandmorty/character/${character}`
//Link M3 WebServer 