import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path='/' element={<Home />} />

					<Route path='/filme/:id' element={<Movie />} />

					<Route path='/procurar' element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);
