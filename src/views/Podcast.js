import PodcastItem from "components/Items/PodcastItem";
import {useEffect, useState} from "react";
import { URL_PODCAST } from "../utils/config"



const Podcast = () => {

    const [podcastData,setPodcastData] = useState([{}])

    useEffect(()=>{
        fetch(URL_PODCAST).then(
            response => response.json()
        ).then(
            data=>{
                setPodcastData(data)
            }
        )
    }, [])

    

    
    const items = podcastData
    return (
        <div className="page">
        <div className="row row-cols-5 podcast">
            
            {items.map(item => <div className="col col-lg-3 col-md-4 col-xs-6"><PodcastItem item={item} key={item.id} /></div>)}
           </div>
        </div>
       
    );
};

export default Podcast;