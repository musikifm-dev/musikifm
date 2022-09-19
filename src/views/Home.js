import HeroSlider from "../components/Home/HeroSlider";
import PodcastSlider from "../components/Home/PodcastSlider";
import BlogSlider from "../components/Home/BlogSlider";
import VideoSlider from "components/Home/VideoSlider";

const Home = () => {


  


    return (
        <div className="page">
            <HeroSlider/>
            <PodcastSlider/>
            <BlogSlider />
            <VideoSlider />
            {/* <li>
                    <button
            className="bg-red-500 rounded py-1 px-3 text-white"
            onClick={handleLogout}
          >
            Log Out
          </button>
                    </li>   */}
        </div>
    );
};

export default Home;