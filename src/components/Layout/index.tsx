import { StyledContainer as Container, StyledMainContainer as MainContainer } from './styles';
import { Logo } from '../Logo';

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <Container>
      <header>
        <Logo />
      </header>
      <main>{children}</main>
    </Container>
  );
}

export { Container, MainContainer };
