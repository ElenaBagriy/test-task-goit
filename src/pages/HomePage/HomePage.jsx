import { useLocation } from "react-router-dom";
import { Container, Link, Title } from "./HomePage.styled";

const HomePage = () => {
  const location = useLocation();
  return (<Container>
    <Title>
      Welcome to the Tweets App!{' '}
      </Title>
      <Link to={'/tweets'} state={{from: location}}>Tweets</Link>
  </Container>)
};

export default HomePage;