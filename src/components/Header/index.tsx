import { Link, Outlet } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

export default function App() {
  return (
    <header>
      <h2>
        <Link to="/">
          <BiCameraMovie />
          Movies Lib
        </Link>
      </h2>
      <form>
        <input
          type="text"
          placeholder="Busque um filme"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
}
