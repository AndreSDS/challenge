import React from "react";
import Header from "../components/Header";
import SideContent from "../components/SideContent";
import MainContent from "../components/MainContent";
import { Container, LayoutContainer } from "./style";
import Navbar from "../components/Navbar";

function App() {
  const menuItems = ['Editor de código', 'Comunidade'];

  return (
    <Container>
      <Header />
      <LayoutContainer>
        <SideContent title="Menu">
          <Navbar navItems={menuItems} />
        </SideContent>
        <MainContent />
        <SideContent title="Seu Projeto" />
      </LayoutContainer>
    </Container>
  );
}

export default App;
