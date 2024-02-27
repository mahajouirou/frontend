// import React from 'react'
import { useEffect} from 'react'
import './App.css'


function App() {

  useEffect(()=>{
    fetch('http://localhost:8081/login_user' )
    .then(res => {
     
      console.log(res.json());
    
    })
    
    .catch(err => console.log(err));

  },[])


  return (
    <>
     login
      </>
  )
}

export default App
