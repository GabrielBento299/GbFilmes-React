import { ReactNode } from 'react';
import { Container, Title, ContainerMovie } from './styles';

interface IContainer {
  children: ReactNode;
  title: string;
}

export default function MoviesContainer({ children, title }:IContainer) {
  return (
    <Container>
      <Title title={title} />
      <ContainerMovie>
        {children}
      </ContainerMovie>
    </Container>
  );
}
