import { useLocation } from "react-router-dom";
import { Container, ImageWrapper, Link, Title } from "./HomePage.styled";
import logo from "../../images/logo192.png"

const HomePage = () => {
  const location = useLocation();
  return (<Container>
    <Title>
      <ImageWrapper>
        <img src={logo} width={"150px"} alt="logo" />
        </ImageWrapper>
      Welcome to the Tweets App!{' '}
      </Title>
      <Link to={'/tweets'} state={{from: location}}>Tweets</Link>
  </Container>)
};

export default HomePage;