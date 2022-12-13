import React, { useEffect, useState } from 'react'
import '../styles/search.css'
import searchl from '../assests/searchl.svg'
import Card from './Card'
export const Search = () => {
    // const [query,setquery] = useState()
    const [cardinput,setcardinput] = useState()
    const [showcardsearch, setshowcards] = useState(false)
    var query=""
    function getInput(event) {
        // console.log(event.target.value);
        query=event.target.value
        // setquery(event.target.value);
      }
      const fetchcards = ()=>{
        setcardinput(query)
        setshowcards(true);
        const inp = document.getElementsByTagName('input')[0];
        inp.value = null;
      }

  return (
    <>
    <div className = "searchBar" >
      <label htmlFor = "header-search" >
      &nbsp; </label > 
      <input type = "text" id = "header-search" placeholder = "Search Pokemons" name = "s" onChange = {(event)=>getInput(event)} /> 
      &nbsp; 
      <button onClick = {()=>{fetchcards()}} className = "btn" id="showphoto" > Search </button> 
    </div> 
    {showcardsearch? <Card querry={cardinput} setshowcards={setshowcards}/>:null}
    </>
  )
}
