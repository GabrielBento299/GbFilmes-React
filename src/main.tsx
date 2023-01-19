import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import AllMoviesTv from './pages/AllMoviesTv';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';
import Search from './pages/Search';
import SeriePage from './pages/SeriePage';
import Serie from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="movie/:id" element={<Movie />} />

          <Route path="search" element={<Search />} />

          <Route path="series" element={<Serie />} />

          <Route path="serie/:id" element={<SeriePage />} />

          <Route path="all/:id" element={<AllMoviesTv />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
