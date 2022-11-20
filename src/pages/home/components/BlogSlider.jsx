// import { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
// import BlogItem from 'components/Items/BlogItem';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const BlogSlider = () => {
  // const [blogData, setblogData] = useState([{}]);

  // useEffect(() => {
  //   fetch('http://localhost:1337/api/blog-report')
  //     .then(response => response.json())
  //     .then(data => {
  //       setblogData(data);
  //     });
  // }, []);

  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1366: {
        items: 4
      }
    }
  };

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>BLOG</h3>
        <a href="/blog">See All</a>
      </div>

      <OwlCarousel className="owl-theme" {...options}>
        {/* {blogData.map((item, i) => {
          if (item.homepage == true) {
            return (
              <div className="item" key={i}>
                <BlogItem item={item} key={Math.random()} />
              </div>
            );
          }

          return;
        })} */}
      </OwlCarousel>
    </div>
  );
};

export default BlogSlider;
