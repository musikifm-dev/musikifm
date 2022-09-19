import Icon from "../../Icon";
import backgroundImage from 'img/player.png';
import { Range, getTrackBackground } from "react-range";
import {useAudio, useSetState} from 'react-use';
import {useState,useEffect} from 'react';
import axios from "axios";
import ReactPlayer from 'react-player'
import Songs from 'song.json';
import {useDispatch, useSelector} from "react-redux";
import { MUSIKI_RADIO } from "utils/config";


function Player(){

    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;

    const dispatch = useDispatch()
    const {current, sidebar} = useSelector(state => state.player)
    var PlayerControl = false
    var srk = ""

    if (PlayerControl == false && current.src == undefined){
        srk = MUSIKI_RADIO

    }else{
       srk = current.src
       PlayerControl = true
    }

    function changeSong() {
        PlayerControl=false
        srk = current.src
        console.log("old")
    }


    const [values,setValues] = useState([50]);
        const [audio, state, controls, ref] = useAudio({
            src: srk,
            autoPlay: true,
        });

    const [radioPlayImage,setRadioPlayImage] = useState()
    const baseUrl = "https://api.discogs.com/database/search?token=sVSjFzhvRFGxKdEPsHBIAEmmflcGIwCooPIOlNTL&q="+ Songs.song + "-" + Songs.artist;

    useEffect(() => {

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setRadioPlayImage(data.results[0].cover_image));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    const playImage = "http://localhost:1337" + current.image

    return (


    <div>

           {audio}
            <div className="switchPlayer">
                <button onClick={srk = "https://stream.coraxonline.com/musikifm-src.mp3"} className="active">Radio</button>
                <button onClick={changeSong}>Song</button>
            </div>
           <div className="player">
               <img className="img-fluid" src={PlayerControl ? playImage:radioPlayImage} />
            <div className="overlay">
            </div>

               <div className="player-play-info">

                   <h3 id="playerTitle">{PlayerControl ? current.title:Songs.song}</h3>
                   <p id="playerInfo">{PlayerControl ? current.description:Songs.artist}</p>

               </div>
               <div className="player-control">
                   <button>
                       <Icon name="favorite" size="24" />
                   </button>
                   <button>
                       <Icon name="prev" size="24" />
                   </button>
                   <button className="playIcon" onClick={controls[state ?. playing ? 'pause':'play']}>
                           <Icon name={state ?. playing ? 'pause':'play'} size="16" />

                   </button>
                   <button>
                       <Icon name="next" size="24" />
                   </button>
                  <button>
                      <Icon name="share" size="24" />
                  </button>

               </div>


                   <Range
                       values={values}
                       step={STEP}
                       min={MIN}
                       max={MAX}
                       onChange={(values) => setValues( values )}
                       renderTrack={({ props, children }) => (
                           <div
                               onMouseDown={props.onMouseDown}
                               onTouchStart={props.onTouchStart}
                               style={{
                                   ...props.style,
                                   height: "unset",
                                   display: "flex",
                                   width: "100%",
                                   position:"absolute",

                               }}
                           >
                               <div
                                   ref={props.ref}
                                   style={{
                                       height: "5px",
                                       width: "100%",
                                       borderRadius: "4px",
                                       background: getTrackBackground({
                                           values: values,
                                           colors: ["#FF0000", "#000"],
                                           min: MIN,
                                           max: MAX
                                       }),
                                       alignSelf: "center"
                                   }}
                               >
                                   {children}
                               </div>
                           </div>
                       )}
                       renderThumb={({ props, isDragged }) => (
                           <div
                               {...props}
                               style={{
                                   ...props.style,
                                   height: "20px",
                                   width: "20px",
                                   borderRadius: "20px",
                                   backgroundColor: "#FF0000",
                                   display: "flex",
                                   justifyContent: "center",
                                   alignItems: "center",

                               }}
                           />

                       )}
                   />


           </div>
       </div>
    )
}
export default  Player