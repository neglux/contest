import { StyledAbout } from "./About.styled";

import { Container } from "../layout/Container.styled";

import Title from "../components/Title";
import List from "../components/List";

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
        <List isLoading={isLoading} errorMsg={errorMsg}>
          <ul className="about__list">
            {data &&
              data.map((el, index) => {
                const [name, code, url] = el;
                return (
                  <li key={index} className="about__item">
                    {name}
                  </li>
                );
              })}
          </ul>
        </List>
      </StyledAbout>
    </Container>
  );
};

export default About;
