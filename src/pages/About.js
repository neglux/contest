import React from "react";
import Loading from "../components/Loading";

import { StyledAbout } from "../components/styles/About.styled";
import { Container } from "../components/styles/Container.styled";

import Title from "../components/Title";
import useFetch from "../hooks/useFetch";

const About = () => {
  const { isLoading, errorMsg, data } = useFetch(
    "https://kontests.net/api/v1/sites"
  );

  return (
    <Container>
      <StyledAbout>
        <Title
          title="About"
          subtitle="Coding competitions from 10+ websites in one place"
        />
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="about__list">
            {data.map((el, index) => {
              const [name, code, url] = el;
              return (
                <li key={index} className="about__item">
                  {name}
                </li>
              );
            })}
          </ul>
        )}
      </StyledAbout>
    </Container>
  );
};

export default About;
