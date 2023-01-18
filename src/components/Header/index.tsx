import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { FormEvent, useState } from 'react';
import { Container } from './styles';
import { Input } from '../Input';

export default function App() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // eslint-disable-next-line consistent-return
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    navigate(`/search?q=${search}`);
    setSearch('');
  }

  return (
    <Container>
      <div className="links">

        <Link to="/">
          <BiCameraMovie />
          Movies Lib
        </Link>

        <Link to="/series">
          <BiCameraMovie />
          Series
        </Link>

      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Busque um filme"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </Container>
  );
}
