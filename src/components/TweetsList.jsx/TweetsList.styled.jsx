import styled from "styled-components";

export const Container = styled.main`
    padding: 15px;
    margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 16px;
`;

export const Item = styled.li`
    position: relative;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
`;

export const Button = styled.button`
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

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const Message = styled.p`
max-width: 380px;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  line-height: 1.5;
`