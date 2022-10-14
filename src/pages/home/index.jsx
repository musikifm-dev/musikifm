import HeroSlider from './components/HeroSlider';
import PodcastSlider from './components/PodcastSlider';
import BlogSlider from './components/BlogSlider';
import VideoSlider from 'pages/home/components/VideoSlider';

const Home = () => {
  console.log("Hello");
  return (
    <>
      <HeroSlider />
      <PodcastSlider />
      <BlogSlider />
      <VideoSlider />
    </>
  );
};

export default Home;
