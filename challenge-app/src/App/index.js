import React from "react";
import Header from "../components/Header";
import SideContent from "../components/SideContent";
import MainContent from "../components/MainContent";
import { Container, LayoutContainer } from "./style";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useState } from "react";

function App() {
  const menuItems = ["Editor de código", "Comunidade"];

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  return (
    <Container>
      <Header />
      <LayoutContainer>
        
        <SideContent title="Menu">
          <Navbar navItems={menuItems} />
        </SideContent>

        <MainContent />

        <SideContent title="Seu Projeto">
          <Input
            type="text"
            name="project-name"
            value={projectName}
            placeholder="Nome do seu projeto"
            handleSubmit={() => {}}
            handleText={() => {}}
          />
          <Input
            type="textarea"
            name="project-description"
            value={projectDescription}
            placeholder="Descrição do seu projeto"
            handleSubmit={() => {}}
            handleText={() => {}}
          />

          <SideContent title="Personalização">
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">
                Coconut
              </option>
              <option value="mango">Mango</option>
            </select>
          </SideContent>
        </SideContent>

      </LayoutContainer>
    </Container>
  );
}

export default App;
