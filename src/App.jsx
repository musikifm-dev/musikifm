import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import LoginForm from './utils/auth/LoginForm';
import LoginRedirect from './utils/auth/LoginRedirect';
import Songs from './pages/song/Songs';
import Profile from './components/Profile/Profile';
import BlogDetail from './components/Detail/BlogDetail';
import Blog from './pages/blog/Blog';
import VideoDetail from './components/Detail/VideoDetail';
import PodcastDetail from './components/Detail/PodcastDetail';
import Register from './utils/auth/Register';
import { route } from './utils/constants/index';
import { Home, Podcast, Videos } from './pages';
import Layout from './layout/layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={route.home} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={route.podcast} element={<Podcast />} />
      <Route path={`${route.podcast}:id`} element={<PodcastDetail />} />
      <Route path={`${route.blog}:id`} element={<BlogDetail />} />
      <Route path={route.video} element={<VideoDetail />} />
      <Route path={route.songs} element={<Songs />} />
      <Route path={route.login} element={<LoginForm />} />
      <Route path={route.video} element={<Videos />} />
      <Route path={route.blog} element={<Blog />} />
      <Route path={route.accountSettings} element={<Videos />} />
      <Route path={route.profile} element={<Profile />} />
      <Route path={route.register} element={<Register />} />
      <Route path="/connect/:providerName" element={<LoginRedirect />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
