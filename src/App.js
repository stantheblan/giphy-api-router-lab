import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import ErrorPage from './Pages/ErrorPage';
import './App.css';
import Home from './Pages/Home'
import Trending from './Pages/Trending';
import Search from './Pages/Search';



export default function App() {
  return (
      <Router>
        <nav>
          <Link to={'/random'}>Random</Link>
          <Link to={'/trending'}>Trending</Link>
          <Link to={'/search'}>Search</Link>
        </nav>
        <Routes>
          <Route path='/'></Route>
          <Route path='/random' element={<Home/>}></Route>
          <Route path='/trending' element={<Trending/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/*' element={<ErrorPage/>}></Route>
        </Routes>
      </Router>
  );
}