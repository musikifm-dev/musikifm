import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginRedirect from './utils/auth/LoginRedirect'
import BlogDetail from './pages/blog/detail'
import VideoDetail from './pages/video/detail'
import PodcastDetail from './pages/podcast/detail'
import { route } from './utils/constants/index'
import { Home, Podcast, Register, Video, Blog, Songs, EmailVerification, Login, MoodFilter } from './pages'
import { AppLayout, AuthLayout } from 'layout'
import SessionWrapper from 'sections/session-wrapper'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={route.home} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={route.podcast} element={<Podcast />} />
        <Route path={`${route.podcast}/:id`} element={<PodcastDetail />} />
        <Route path={route.blog} element={<Blog />} />
        <Route path={`${route.blog}/:id`} element={<BlogDetail />} />
        <Route path={route.video} element={<Video />} />
        <Route path={`${route.video}/:id`} element={<VideoDetail />} />
        <Route path={route.songs} element={<Songs />} />
        <Route path={route.moodFilter} element={<MoodFilter />} />
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
  return (
    <SessionWrapper>
      <RouterProvider router={router} />
    </SessionWrapper>
  )
}

export default App
