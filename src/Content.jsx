import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Content = () => {
    const [moviescontent,setmovies]=useState([]);

    const apiurl= {
      method: 'GET',
      url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
      headers: {
        'X-RapidAPI-Key': 'c6038b6b88mshe3548bf8f3aafa2p1ed22cjsn73a448ad2686',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    async function movie() { 
      const data= await axios.request(apiurl);
      setmovies(data.data.results)
      console.log(data.data.results);
    }
    useEffect(() => {
      movie()
    },[])


    async function displayDrink() {
      console.log(document.getElementById("searchString").value);
      let searchStr=document.getElementById("searchString").value;
      let url=`https://movieyvice.com/api/movie/${searchStr}`;
      const data= await axios.get(url);
      console.log(data.data);
      setmovies(data.data);

    } 

  return (
    <main>
      <input type='text' id='searchString'></input>
      <button onClick={() => displayDrink()}>SUBMIT</button>
      <div className='row'>
        {moviescontent && moviescontent.map((item) => {
          return (<Card entire={item} id={item.id} title={item.titleText.text} desc={item.releaseYear.year} src={item.primaryImage?item.primaryImage.url:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}/>)
        })}
      </div>
    </main>
  );
}

export default Content;
