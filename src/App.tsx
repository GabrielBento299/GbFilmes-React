import { Outlet } from 'react-router-dom';
import GlobalStyles from './assets/styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <h1>GB Filmes</h1>
      <Outlet />
    </>
  );
}
