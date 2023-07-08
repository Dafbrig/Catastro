import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ background: '#212121' }}>
        <Container style={{ paddingTop: '2rem', height: '90vh' }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
