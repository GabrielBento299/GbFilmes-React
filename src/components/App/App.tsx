import { Outlet } from 'react-router-dom';
import GlobalStyles from '../../assets/styles/global';
import Header from '../Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}
