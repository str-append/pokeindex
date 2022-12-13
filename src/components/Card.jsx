import React, { useState,useEffect } from "react"
import '../styles/card.css'
import colors from '../constant/colors.json'
const Card = ({querry,setshowcards}) =>{
    console.log("runnnig card.jsx")
    var query = querry.toLowerCase()
    const [data,setdata] =useState({});
    const [isdone,setdone] = useState(false);
    const [isnotfound, setnotfound] = useState(false);
    useEffect(()=>{
        console.log("useefect in card.jsx")
        setnotfound(false)
        const fetchres = async()=>{
            setdone(false)
            fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`)
            .then((response)=>{
                console.log(response.status)
                if(!response.ok)
                {
                    setnotfound(true);
                }
                return response.json() 
            })
            .then((json)=>{
                console.log("fetching apis")
                setdata(json);
            })
            .catch((err) => {
                if(err) setnotfound(true);
                console.log(err.message);
            })
            .finally(()=>{
                setdone(true);
            })
        }
        console.log("fetched apis")
        fetchres()
        console.log("fetched apis1")
    },[query])
    console.log(data)
    const typefinder =()=>{
        var types = data.types[0].type.name;
        setTimeout(() => {
            if(document.getElementsByClassName("card")[0])
            {
            const divcolor = document.getElementsByClassName("card")[0];
            console.log(divcolor);
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
            }
        }, 150);
    }
    const closecard = ()=>{
        setshowcards(false);
    }
    const closerror =()=>{
        // {
        //     setTimeout(() => {
        //     const div1 = document.getElementsByClassName("error")[0];
        //     div1.style.display = 'none';
        //     }, 2000)
        //     setTimeout(() => {
        //         const div1 = document.getElementsByClassName("error")[0];
        //         div1.style.display = 'flex';
        //         }, 4000)
        // }
    }
    return (
        <>
            {/* {isdone?
            <div>
                <div>
                {
                    data.abilities.map((item,key)=>(
                        <div key={key}>
                            {
                                item.ability.name
                            }
                        </div>
                    ))
                }
                </div>
                <div>
                    <img src ={data.sprites.other.dream_world.front_default}
                    />
                </div>
                <div>
                    {data.moves.map((item,key)=>(
                        <div key={key}>
                            {item.move.name}
                        </div>
                    ))}
                </div>
                <div>
                    {data.types.map((item,key)=>(
                        <div key={key}>
                            {item.type.name}
                        </div>
                    ))}
                </div>
            </div>:<div>waiting</div>
            } */}
            {isnotfound?<div className="error">
                <div className="error1" onClick={()=>{closerror()}}> 
                    Something Went Wrong
                </div> 
            </div>:
            <div style={{disply:'flex'}}>
            {isdone? 
            <div className="cardContainer">
                <div className="card">
                    {typefinder()}
                    <div className="closecontainer">
                    
                        <div className="close" onClick={()=>closecard()}>X</div>
                    </div>
                    <div className="imageContainer">
                        <img src={data.sprites.other.dream_world.front_default} alt="norefferer noopener"  />
                    </div>
                    <div className="title">
                        {query[0].toUpperCase() + query.slice(1)}
                    </div>
                        <div className="stats">
                            <div className="typestat">
                                <div className="typename">
                                    {
                                        data.types.map((item,key)=>(
                                            <div key={key}>{item.type.name}</div>
                                        ))

                                    }
                                </div>
                                <div className="type stat">Type</div>
                            </div>
                            
                            <div className="weightstat">
                                <div className="weightvalue">{data.weight /10}kg</div>
                                <div className="weight stat">Weight</div>
                            </div>
                            <div className="heightstat">
                                <div className="heightvalue">{data.height /10}m</div>
                                <div className="height stat">Height</div>
                            </div>
                        </div>
                        <div className="stattitle">
                            Stats
                        </div>
                        <div className="stats2">
                            <div className="hpstat">
                                <div className="hpkvalue">{data.stats[0].base_stat}</div>
                                <div className="hp stat">HP</div>
                            </div>
                            <div className="Attackstat">
                                <div className="attackvalue">{data.stats[1].base_stat}</div>
                                <div className="attack stat">Attack</div>
                            </div>
                            <div className="defencestat">
                                <div className="defencevalue">{data.stats[2].base_stat}</div>
                                <div className="defence stat">Defense</div>
                            </div>
                            <div className="Spaatackstat">
                            <div className="spattackvalue">{data.stats[3].base_stat}</div>
                                <div className="spattack stat">Sp.Attack</div>
                            </div>
                            <div className="Spdefensestat">
                            <div className="spdefensevalue">{data.stats[4].base_stat}</div>
                                <div className="spdefense stat">Sp.Defense</div>
                            </div>
                            <div className="speedstat">
                            <div className="speedvalue">{data.stats[5].base_stat}</div>
                                <div className="speed stat">Speed</div>
                            </div>
                        </div>
                        {/* <div className="grid2">
                            <div>flying/electric</div>
                            <div>type</div>
                        </div> */}
                    </div>
            </div>:<div>waiting</div>
            }  
            </div> 
            }
        </>
    )
}

export default Card