import React, { useState, useEffect } from 'react';
import { Card } from "./Card"

export const Main = () => {

  const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setItem(data.data.results)
    })
    .catch(err=>{
      console.log(err)
    })
  },[url])

  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
  }

  return (
    <>
        <div className="header">
            <div className="search-bar">
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
