import Navbar from "./components/Navbars";
import BottomBar from "./components/BottomBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { useCookies } from "react-cookie";

import Videos from "views/Videos";
import Sidebar from "components/Sidebar";
import Podcast from "views/Podcast";
import LoginForm from 'Auth/LoginForm';
import LoginRedirect from 'Auth/LoginRedirect';
import Home from "views/Home";
import Songs from "views/Songs";
import Profile from "components/Profile/Profile";
import BlogDetail from "components/Detail/BlogDetail";
import Blog from "views/Blog";
import VideoDetail from "components/Detail/VideoDetail";
import PodcastDetail from "components/Detail/PodcastDetail";
import Register from "Auth/Register";

function App() {

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    

  return (
   <>
       <Router>
           <div className="wrapper">
               <Navbar  cookies={cookies} removeCookie={removeCookie} />
               <main className="content">

            <Sidebar />
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route path='/podcast' element={<Podcast />} />
                <Route path='/podcast/:id' element={<PodcastDetail />} />
                <Route path='/blog/:id' element={<BlogDetail />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/songs' element={<Songs />} />
                <Route path='/login' element={<LoginForm setCookie={setCookie} />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/account-settings' element={<Videos />} />
                <Route
                    path="/profile"
                    element={<Profile cookies={cookies} removeCookie={removeCookie} />}
                />
                <Route path="/register" element={<Register cookies={cookies} />} />
                <Route
            path="/connect/:providerName"
            element={<LoginRedirect setCookie={setCookie} />}
            />
            </Routes>
        </main>
           </div>

       </Router>

   </>
  );
}

export default App;
