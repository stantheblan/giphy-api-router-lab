import { useState, useEffect } from 'react';
import { getTrending } from "../Services/getRequest";

export default function Trending() {
    const [trendingGif, setTrendingGif] = useState([]);

    useEffect(() => {
      getTrending()
      .then(res => setTrendingGif(res.data.data))
    }, [])

    console.log(trendingGif)
    return (
    <div>
    {
        trendingGif.map((gif, i) => 
        {
            return (<img key={i} src={gif.images.downsized_large.url}/>) 
        })
    }
    </div>
  );
}
