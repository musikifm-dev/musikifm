import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginRedirect from './utils/auth/LoginRedirect'
import Profile from './components/Profile/Profile'
import BlogDetail from './components/Detail/BlogDetail'
import VideoDetail from './components/Detail/VideoDetail'
import PodcastDetail from './components/Detail/PodcastDetail'
import { route } from './utils/constants/index'
import { Home, Podcast, Register, Videos, Blog, Songs, EmailVerification, Login } from './pages'
import { AppLayout, AuthLayout } from 'layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={route.home} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={route.podcast} element={<Podcast />} />
        <Route path={`${route.podcast}:id`} element={<PodcastDetail />} />
        <Route path={`${route.blog}:id`} element={<BlogDetail />} />
        <Route path={route.video} element={<VideoDetail />} />
        <Route path={route.songs} element={<Songs />} />
        <Route path={route.video} element={<Videos />} />
        <Route path={route.blog} element={<Blog />} />
        <Route path={route.accountSettings} element={<Videos />} />
        <Route path={route.profile} element={<Profile />} />
        <Route path="/connect/:providerName" element={<LoginRedirect />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={route.login} element={<Login />} />
        <Route path="/login/email-verification" element={<EmailVerification />} />
        <Route path={route.register} element={<Register />} />
      </Route>
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
