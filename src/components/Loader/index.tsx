import Spinner from '../Spinner';
import { Overlay } from './styles';

interface IOverlay {
  isLoading: boolean;
}

export default function Loader({ isLoading } :IOverlay) {
  if (!isLoading) {
    return null;
  }
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}
