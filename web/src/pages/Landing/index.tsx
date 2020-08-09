import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  LandingPage,
  Container,
  LogoContainer,
  ButtonsContainer,
  LandingImage,
  Connections,
} from "./styles";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import api from "../../services/api";

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      const { total } = res.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <LandingPage>
      <Container>
        <LogoContainer>
          <img src={logoImg} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <LandingImage src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <Connections>
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Connections>
      </Container>
    </LandingPage>
  );
};

export default Landing;
