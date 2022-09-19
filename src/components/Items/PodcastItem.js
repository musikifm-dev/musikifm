import Icon from "../../Icon";
import {useDispatch, useSelector} from "react-redux";
import {setCurrent} from "stores/player";
import { Link } from "react-router-dom";

function PodcastItem({item}) {
    const dispatch = useDispatch()
    const {current} = useSelector(state => state.player)
    const updateCurrent = () =>{
        dispatch(setCurrent(item))
    }
    const podcastImage = "http://localhost:1337" + item.image
    return(
        
            <div className="podcastBox">
                 <Link to={`/podcast/${item.id}`}>
                <div className="podcastBox__image">
                    <img src={podcastImage} />
                </div>
                </Link>
                <div className="podcastBox__content">
                    <div className="podcastBox__title">
                        <h4>{item.title}</h4>
                    </div>
                    <div className="podcastBox__info">
                        <p>{item.description}</p>
                    </div>
                    <div className="podcastBox__player">
                        <div className="timeBox">
                            {/* <Icon name="time" size="14" />
                            <span>2:36</span> */}
                        </div>
                        <button className="PlayPodcast" data-src=""  onClick={updateCurrent}>
                            <Icon name={current ?.id === item.id ? 'pause' : 'play'} size="18" />
                        </button>
                    </div>
                </div>
            </div>

       
    )
}
export default PodcastItem