import { Route, Routes } from 'react-router-dom';
import { useCookies } from "react-cookie";
import Home from "../views/Home";
import Songs from "../views/Songs";
import Videos from "../views/Videos";
import Sidebar from "./Sidebar";
import Podcast from "../views/Podcast";
import LoginForm from 'Auth/LoginForm';
import Profile from './Profile/Profile';
import LoginRedirect from 'Auth/LoginRedirect';



function Content() {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    return (
        <main className="content">

            <Sidebar />
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route path='/podcast' element={<Podcast />} />
                <Route path='/songs' element={<Songs />} />
                <Route path='/login' element={<LoginForm setCookie={setCookie} />} />
                <Route path='/videos' element={<Videos />} />
                <Route path='/account-settings' element={<Videos />} />
                <Route
                    path="/profile"
                    element={<Profile cookies={cookies} removeCookie={removeCookie} />}
                />
                 <Route
          path="/connect/:providerName"
          element={<LoginRedirect setCookie={setCookie} />}
        />
            </Routes>
        </main>
    )
}
export default Content