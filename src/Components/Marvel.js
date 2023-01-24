import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export const Marvel = () => {
  const {id}=useParams();
  const [item,setItem]=useState()
  const fetch=async()=>{
    const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=027bd6da0ac9586b8518687eae8a40e0&hash=46e59d58fdf1d72af58e9ebea0564866`)
    setItem(res.data.data.results[0])
  }
  fetch();
  return (
    <>
    {
      (!item)? "":(
        <div className="box-content">
          <div className="right-box">
          <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
          <a href='/'>Back</a>
        </div>
      )
    }
    </>
  )
}
