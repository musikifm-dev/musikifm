import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import VideoItem from "components/Items/VideoItem";
import { URL_VIDEOS } from "utils/config";


const VideoSlider = () => {


    const [videoData,setvideoData] = useState([{}])

    useEffect(()=>{
        fetch(URL_VIDEOS).then(
            response => response.json()
        ).then(
            data=>{
                setvideoData(data)
                console.log(data);
            }
        )
    }, [])

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1366: {
                items: 3,
    
            }
        },
    };

    
    const itemm = videoData

    return (
        <div className="video mt-5">
            <div className="titleDiv">
                <h3>VİDEO</h3>
                <a href="">See All</a>
            </div>

            <OwlCarousel
                className='owl-theme'

                {...options}
            >
                                
                {itemm.map((item) => {
        if (item.homepage == true) {
          return <div className="item"><VideoItem item={item} key={Math.random()} /></div>
        }

        return 
      })}
               

            </OwlCarousel>
        </div>
    );
};

export default VideoSlider;