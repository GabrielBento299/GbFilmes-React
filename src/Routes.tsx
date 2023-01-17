import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

export default function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />

          <Route path="/filme/:id" element={<Movie />} />

          <Route path="/procurar" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
