// node_modules
import { Routes, Route } from 'react-router-dom'

// styles
import './App.css'

// pages
import Home from 'pages'
import Profile from 'pages/Profile'
import Movies from 'pages/Movies'
import SavedMovies from 'pages/SavedMovies'
import Auth from 'pages/Auth'

// components
import Layout from './components/Layout'

// constants
import { ROUTES } from './utils/const'


const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Layout><Home /></Layout>} />
      <Route path={ROUTES.profile} element={<Layout><Profile /></Layout>} />
      <Route path={ROUTES.movies} element={<Layout><Movies /></Layout>} />
      <Route path={ROUTES.savedMovies} element={<Layout><SavedMovies /></Layout>} />
      <Route path={ROUTES.register} element={<Auth />} />
      <Route path={ROUTES.login} element={<Auth />} />
    </Routes>
  )
}

export default App