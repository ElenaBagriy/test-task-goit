import styled from "styled-components";
import questions1x from '../../images/questions@1x-min.png';
import questions2x from '../../images/questions@2x-min.png';
import rectangle1x from '../../images/Rectangle 1@1x-min.png';
import rectangle2x from '../../images/Rectangle 1@2x-min.png';
import logo1x from '../../images/Logo@1x-min.png';
import logo2x from '../../images/Logo@2x-min.png';

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

`;

export const AvatarWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 214px;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06);
`;

export const Avatar = styled.img`
    position: absolute;
    object-fit: cover;
    height: 80px;
    width: 80px;
`;

export const AvatarFrame = styled.img`
    position: absolute;
    object-fit: cover;
    height: 90px;
    width: 89px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 36px;

      &:not(:last-child) {
        margin-bottom: 26px;
    }
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.22;
    text-transform: uppercase;
    color: #EBD8FF;
    margin-bottom: 16px;

    &.followers {
        margin-bottom: 26px;
    }
`;

export const FollowButton = styled.button`
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
    background-color: ${(props) => (props.isFollowing ? '#5CD3A8' : '#EBD8FF')};
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

    &:hover {
      background: rgba(#fff, 1);
      box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
      outline: 1px solid;
      outline-color: rgba(0, 0, 0, 0);
      outline-offset: 25px;
      text-shadow: 1px 1px 2px #427388;
    }
`;

export const Container = styled.div`
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;

  background-image: url(${questions1x}),
  url(${logo1x}),
  url(${rectangle1x}),
  linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  background-size: 308px 168px, 76px 22px, 380px 15px, 380px 460px,;
  background-repeat: no-repeat;
  background-position: left 36px top 28px, left 20px top 20px, left 0px top 214px, left 0px top 0px;

    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
        background-image: url(${questions2x}),
        url(${logo2x}),
        url(${rectangle2x}),
        linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
        background-size: 308px 168px, 76px 22px, 380px 15px, 380px 460px;
        background-repeat: no-repeat;
        background-position: left 36px top 28px, left 20px top 20px, left 0px top 214px, left 0px top 0px;
  }
`;
