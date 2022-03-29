import React from 'react'
import { useState, useEffect } from 'react';
import { getSearch } from '../Services/getRequest';


export default function Search() {
  
    const [searchGif, setSearchGif] = useState([]);

    function findGif(){
        const searchTxt = document.getElementById('searchBox').value;
        getSearch(searchTxt)
        .then(res => setSearchGif(res.data.data))
    }

    console.log(searchGif)
    return (
      
    <div>
        Search
        <input id='searchBox' defaultValue={'kitty'}/>
        <button onClick={() => {findGif()}}>Search</button><br></br>
        {
            searchGif.map((gif, i) => 
            {
                return (<img key={i} src={gif.images.downsized_large.url}/>) 
            })
        }
    </div>
  )
}