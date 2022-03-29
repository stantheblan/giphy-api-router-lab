import { useState, useEffect } from 'react';
import { getRandom } from "../Services/getRequest";

export default function Home() {
    const [randomGif, setRandomGif] = useState([]);
    
    useEffect(() => {
      getRandom()
      .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }, [])
    
    function newRandom()
    {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_large.url))
    }

    console.log(randomGif)
    return (
    <div> 
        <img src={randomGif} onClick={newRandom}/> 
        <p>Click the image to advance</p>
    </div>
    );
}
