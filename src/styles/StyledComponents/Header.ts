import styled from 'styled-components';
import { BaseButton } from './Button';
import { colors, margins } from 'styles/Variables';

interface StyledListItemProps {
  active?: boolean;
}

export const StyledHeader = styled.header`
  background: ${colors.secondaryPageColor};
  margin-bottom: 24px;
  overflow: auto;
`;

export const StyledHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px ${margins.general} 0 ${margins.general};
`

export const StyledHeaderSocial = styled.div``

export const StyledHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`

export const StyledHeaderButton = styled(BaseButton)`
  margin-bottom: 107px;
`

export const StyledHeaderSocialList = styled.ul`
  display: flex;
  text-transform: uppercase;
`

export const StyledHeaderSocialListItem = styled.li<StyledListItemProps>`
  width: 164px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.active ? colors.textActive : colors.textSubtitle};
  border-bottom: ${props => props.active ? `2px solid ${colors.primary}` : 'none'};
  font-weight: 500;
  cursor: pointer;
`;
