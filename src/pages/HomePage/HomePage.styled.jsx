import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
margin-bottom: 40px;
`;

export const Link = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 196px;
    height: 50px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #373737;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;
    border: none;
    background-color: #EBD8FF;

    &:hover {
      background-color: #5CD3A8;
    }
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 150px;
`