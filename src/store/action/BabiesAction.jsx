const baseUrl ="http://localhost:3001/data"
const axios = require('axios')

export const fetchDataBabies = ()=> {
  return (dispatch)=> {
    axios.get(baseUrl)
      .then(data =>{
        dispatch({type:"FETCH_DATA", payload:data})
      })
      .catch(err=>{
        console.log(err)
      })
      .finally(()=>{
        dispatch({type:"DATA_LOADING", payload:false})
      })
  }
}