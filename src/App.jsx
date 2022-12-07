import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginRedirect from './utils/auth/LoginRedirect'
import BlogDetail from './components/Detail/BlogDetail'
import VideoDetail from './components/Detail/VideoDetail'
import PodcastDetail from './components/Detail/PodcastDetail'
import { route } from './utils/constants/index'
import { Home, Podcast, Register, Videos, Blog, Songs, EmailVerification, Login, MoodFilter } from './pages'
import { AppLayout, AuthLayout } from 'layout'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useCheckAuthenticationQuery } from 'store/api/auth'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={route.home} element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path={route.podcast} element={<Podcast />} />
        <Route path={`${route.podcast}/:id`} element={<PodcastDetail />} />
        <Route path={route.blog} element={<Blog />} />
        <Route path={`${route.blog}/:id`} element={<BlogDetail />} />
        <Route path={route.video} element={<Videos />} />
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
  // const { data } = useCheckAuthenticationQuery()
  // const { auth } = useSelector((state) => state)
  // const dispatch = useDispatch()

  // console.log({ data: data, auth: auth })
  // useEffect(() => {
  //   if (data) {
  //     console.log('DISPATCHED')
  //     dispatch({ ...auth, isAuthenticated: true })
  //   }
  // }, [])

  return <RouterProvider router={router} />
}

export default App
