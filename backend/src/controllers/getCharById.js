const axios = require("axios");
require('dotenv').config();
const {URL} = process.env;

const getCharById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}${id}`)
    .then((response) => {
      const { id, name, species, image, gender } = response.data;
      res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharById;










































/*const axios = require('axios')

let getCharById = (res,id)=>{

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
        (response) => response.data,
        (reason) => reason.respose.data
    )
    .then(({image,name,gender,species})=>{ 
        let character = {
         id,
           image,
          name,
       gender,
        species
          }
          return res.writeHead(200,{'Content-Type': 'application/json'})
  .end(JSON.stringify(character))
    }).catch(error => {
        return res.writeHead(500,{'Content-Type': 'text/plain'})
        .end(error.message)
    })


   

} 

module.exports = {getCharById}*/