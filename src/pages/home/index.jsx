import BlogSlider from "sections/card/components/blog-slider"
import HeroSlider from "sections/card/components/hero-slider"
import PodcastSlider from "sections/card/components/podcast-slider"
import VideoSlider from "sections/card/components/video-slider"



const Home = () => {
  return (
    <>
      <HeroSlider />
      <PodcastSlider />
      <BlogSlider />
      <VideoSlider />
    </>
  )
}

export default Home
