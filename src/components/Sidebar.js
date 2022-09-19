import Player from "./Sidebar/Player";
import AdsBanner from "./Sidebar/AdsBanner";

function Sidebar(){
    return (
       <aside className="sidebar">
        <Player/>
        <div className="play-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <AdsBanner/>
       </aside>
    )
}
export default  Sidebar