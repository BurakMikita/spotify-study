import React from 'react';

import Container from '@mui/material/Container';
import Navbar from '@/components/NavBar';
import Player from '@/components/Player';
import { ReduxProvider } from '@/store/provider';
import { useTypedSelector } from '@/hooks/useTypedSelector';

type BoxProps = {
    children: React.ReactNode; // 👈️ type children
  };

const MainLayout = (props: BoxProps) => {

  
    return (
        <>
        <ReduxProvider>
            <Navbar/>
            <Container style={{margin: "90px 0"}}>
            {props.children}
              </Container>
            <Player/>
            </ReduxProvider>
        </>
    );
};

export default MainLayout;