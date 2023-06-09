import { StyledLink } from "./BackLink.styled";
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
return (
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}; 

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.node,
};