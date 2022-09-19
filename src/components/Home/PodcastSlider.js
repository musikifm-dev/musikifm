import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PodcastItem from "../Items/PodcastItem";









const PodcastSlider = () => {


    const [podcastData,setPodcastData] = useState([{}])

    useEffect(()=>{
        fetch("http://localhost:1337/api/podcast-report").then(
            response => response.json()
        ).then(
            data=>{
                setPodcastData(data)
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
                items: 4,
    
            },
            1600: {
                items: 5,
    
            }
        },
    };
    
    const itemm = podcastData

    return (
        <div className="podcast mt-5">
            <div className="titleDiv">
                <h3>PODCAST</h3>
                <a href="/podcast">See All</a>
            </div>

            <OwlCarousel
                className='owl-theme'
                {...options}
            >
                                
                {itemm.map((item) => {
        if (item.homepage == true) {
          return <div className="item"><PodcastItem item={item} key={Math.random()} /></div>
        }

        return 
      })}
               

            </OwlCarousel>
        </div>
    );
};

export default PodcastSlider;