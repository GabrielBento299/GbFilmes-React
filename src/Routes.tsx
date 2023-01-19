import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App/App';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Serie from './pages/Series';

export default function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="movie/:id" element={<Movie />} />

        <Route path="search" element={<Search />} />

        <Route path="series" element={<Serie />} />

        <Route path="series:id" element={<Movie />} />

      </Routes>
    </BrowserRouter>
  );
}
