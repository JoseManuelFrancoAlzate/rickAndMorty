import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import styled  from './Nav.module.css'
const Nav = ({onSearch}) => {
    return(

<nav >
    <div >

        <div className={styled.search}>
        <Link className={styled.links} to='/' style={{color:'red'}} >  LOGOUT</Link>
  
        <Link className={styled.links} to='/favorites' style={{color:'red'}}>  Favorites</Link>

<Link className={styled.links} to='/about' style={{color:'red'}}>  About</Link>

<Link className={styled.links} to='/detail/:detailId' style={{color:'red'}}>  Detail</Link> 
        <SearchBar onSearch={onSearch} />

</div>
      

</div>
</nav>

    )
}


export default Nav
/*
<SearchBar
onSearch={(characterID) => window.alert(characterID)}
/> */