import { Button, Container, Menu } from 'semantic-ui-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('/');
  };

  const handleNavigateNewTask = () => {
    router.push('/tasks/new');
  };

  return (
    <Menu inverted attached style={{ padding: '1rem' }}>
      <Container>
        <Menu.Item onClick={handleNavigateHome}>
          <Image
            src="https://i.pinimg.com/564x/fa/99/69/fa99695d46c1e28ef267519904f8dcb5.jpg"
            width={30}
            height={30}
            alt="Logo"
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button onClick={handleNavigateNewTask}>New Task</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Navbar;