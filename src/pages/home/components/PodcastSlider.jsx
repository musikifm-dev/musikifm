import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { Card } from 'components/index';
import { route } from 'utils/constants';
import styles from '../style.module.scss';

const PodcastSlider = () => {
  const [podcastData, setPodcastData] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:1337/api/podcast-report')
      .then(response => response.json())
      .then(data => {
        setPodcastData(data);
      });
  }, []);

  return (
    <div className={styles.slider}>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className="sectionHeader">BLOG</h3>
        <Link to={route.blog} className="seeAll">
          See All
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={70}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10
          }
        }}
      >
        {podcastData.map((item, i) => {
          if (item.homepage == true) {
            return (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default PodcastSlider;
