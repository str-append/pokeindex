import React, { useState,useEffect } from "react"
import '../styles/home.css'
import colors from '../constant/colors.json'
import Card from './Card'
const Home = () =>{
    // const colors ={
    //     fire:"#FDDEDF",
    //     grass:"#DEFDE0",
    //     electric:"#FCF7DE",
    //     water:"#DEF3FD",
    //     ground:"#F4e7da",
    //     rock:"#d5d5d4",
    //     fairy:"#fceaff",
    //     poison:"#98d7a5",
    //     bug:"#f8d5a3",
    //     dragon:"#97b3e6",
    //     psychic:"#eaeda1",
    //     flying:"F5F5F5",
    //     fighting:"#E6E0D4",
    //     normal:"#F5F5F5",
    // }
    const [data,setdata] =useState({});
    const [isdone ,setdone] = useState(false);
    const [url,seturl] =useState("https://pokeapi.co/api/v2/pokemon")
    useEffect(()=>{
        const fetchres = async()=>{
            setdone(false)
            await fetch(url)
        .then(response=>response.json())
        .then((json)=>{
            setdata(json);
            setdone(true);
            // console.log(data.results);
        })
        }
        fetchres()
        console.log(data);
    },[url])
    const typefinder = async(index)=>{
        // var indexint = index;
        // console.log(indexint);
        var types = "";
        await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response=>response.json())
        .then((json)=>{
            types = json.types[0].type.name
            console.log(types);
            var divcolor = document.getElementsByClassName(index)[0];
        
        if(types==="fire")
        {
            divcolor.style.backgroundColor = colors.fire;
        }
        if(types==="grass")
        {
            divcolor.style.backgroundColor = colors.grass;
        }
        if(types==="electric")
        {
            divcolor.style.backgroundColor = colors.electric;
        }
        if(types==="water")
        {
            divcolor.style.backgroundColor = colors.water;
        }
        if(types==="ground")
        {
            divcolor.style.backgroundColor = colors.ground;
        }
        if(types==="rock")
        {
            divcolor.style.backgroundColor = colors.rock;
        }
        if(types==="fairy")
        {
            divcolor.style.backgroundColor = colors.fairy;
        }
        if(types==="poison")
        {
            divcolor.style.backgroundColor = colors.poison;
        }
        if(types==="bug")
        {
            divcolor.style.backgroundColor = colors.bug;
        }
        if(types==="dragon")
        {
            divcolor.style.backgroundColor = colors.dragon;
        }
        if(types==="psychic")
        {
            divcolor.style.backgroundColor = colors.psychic;
        }
        if(types==="flying")
        {
            divcolor.style.backgroundColor = colors.flying;
        }
        if(types==="fighting")
        {
            divcolor.style.backgroundColor = colors.fighting;
        }
        if(types==="normal")
        {
            divcolor.style.backgroundColor = colors.normal;
        }
        })
        // var divcolor = document.getElementsByClassName(index)[0];
        
        // if(types==="fire")
        // {
        //     divcolor.style.backgroundColor = colors.fire;
        // }
        // if(types==="grass")
        // {
        //     divcolor.style.backgroundColor = colors.grass;
        // }
        // if(types==="electric")
        // {
        //     divcolor.style.backgroundColor = colors.electric;
        // }
        // if(types==="water")
        // {
        //     divcolor.style.backgroundColor = colors.water;
        // }
        // if(types==="ground")
        // {
        //     divcolor.style.backgroundColor = colors.ground;
        // }
        // if(types==="rock")
        // {
        //     divcolor.style.backgroundColor = colors.rock;
        // }
        // if(types==="fairy")
        // {
        //     divcolor.style.backgroundColor = colors.fairy;
        // }
        // if(types==="poison")
        // {
        //     divcolor.style.backgroundColor = colors.poison;
        // }
        // if(types==="bug")
        // {
        //     divcolor.style.backgroundColor = colors.bug;
        // }
        // if(types==="dragon")
        // {
        //     divcolor.style.backgroundColor = colors.dragon;
        // }
        // if(types==="psychic")
        // {
        //     divcolor.style.backgroundColor = colors.psychic;
        // }
        // if(types==="flying")
        // {
        //     divcolor.style.backgroundColor = colors.flying;
        // }
        // if(types==="fighting")
        // {
        //     divcolor.style.backgroundColor = colors.fighting;
        // }
        // if(types==="normal")
        // {
        //     divcolor.style.backgroundColor = colors.normal;
        // }
    }
    const nextpage = async()=>{
        seturl(data.next)
    }
    const prevpage = async()=>{
        if(data.previous!==null)
        seturl(data.previous);
    }
    const [showcardsearch, setshowcards] = useState(false)
    const [cardinput,setcardinput] = useState()
    const showcard = (card)=>{
        setcardinput(card);
        setshowcards(true);
    }
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [cardinput])
    
    
    return (
        <>
            <div>
            {showcardsearch? <Card querry={cardinput} setshowcards={setshowcards}/>:null}
            </div>
            {isdone?
            <div className="pokemoncontainer">
                <div className="pokeindexhome" >
                {
                    data.results.map((item,key)=>{
                        var inde = item.url.split("/")
                        var ind = inde[6];
                        // console.log(item.name[0].toUpperCase()+item.name.slice(1));
                        typefinder(ind)
                        // console.log(inde);
                        return(
                        <div className={"pokemondatacontainer "+ind} key={key} onClick={()=>{showcard(item.name)}}>
                            <div className="pokemonimagecontainer">
                                <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ind}.svg`}></img>
                            </div>
                            <p>{item.name[0].toUpperCase()+item.name.slice(1)}</p>
                        </div>
                        )
                        })
                }
                </div>
                <button onClick={()=>{nextpage()}}>Next</button>
                <button onClick={()=>{prevpage()}}>Previous Page</button>
            </div>:<div>waiting</div>
            }
        </>
    )
}

export default Home