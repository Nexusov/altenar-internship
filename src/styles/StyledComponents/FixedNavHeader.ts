import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, margins } from 'styles/Variables';

export const StyledFixedNavHeader = styled.header`
  position: fixed;
  width: 100%;
  background: ${colors.secondaryPageColor};
  z-index: 100;
`;

export const StyledFixedNavItems = styled.nav`
  height: 68px;
  display: flex;
  align-items: center;
  margin-left: ${margins.general};
`;

export const StyledFixedHeaderNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;



