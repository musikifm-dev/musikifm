import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import BlogItem from "components/Items/BlogItem";



const BlogSlider = () => {


    const [blogData,setblogData] = useState([{}])

    useEffect(()=>{
        fetch("http://localhost:1337/api/blog-report").then(
            response => response.json()
        ).then(
            data=>{
                setblogData(data)
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
    
            }
        },
    };

    
    const itemm = blogData

    return (
        <div className="blog mt-5">
            <div className="titleDiv">
                <h3>BLOG</h3>
                <a href="/blog">See All</a>
            </div>

            <OwlCarousel
                className='owl-theme'

                {...options}
            >
                                
                {itemm.map((item) => {
        if (item.homepage == true) {
          return <div className="item"><BlogItem item={item} key={Math.random()} /></div>
        }

        return 
      })}
               

            </OwlCarousel>
        </div>
    );
};

export default BlogSlider;