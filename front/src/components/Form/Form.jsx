import React from 'react'
import styled from './Form.module.css'
import {useState} from "react"
import validate from './validation.js'
export default function Form({login}){
    const [userData, setUserData] = useState({ username: '', password: '' });

const [errors, setErrors] = useState({ username: '', password: '' })
    
    const handleInputChange = (event) =>{
        setUserData({
      ...userData,
    [event.target.name]: event.target.value
    
    
    })

    setErrors(
        validate({
          ...userData,
          [event.target.name]: event.target.value
        })
      )}


      const handleSubmit = (event)=>{
event.preventDefault();
       login(userData)
      }

    
    return(
       
        <form onSubmit={ handleSubmit}>
            <center>
            <p>
            <label  className={styled.letraName}>Nombre:</label>
            <input placeholder='Escribe tu nombre...' name='username' value={userData.username} onChange={handleInputChange}/>
            </p>
            {errors.username && <p style={{color:'red'}}>{errors.username}</p>}
            <p>
            <label  className={styled.letraName}>Password:</label>
            <input placeholder='Escribe tu contraseña...' name='password' value={userData.password} onChange={handleInputChange}/>
            </p>
            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            <button>Login</button>
            </center>
        </form>
    
    )
}