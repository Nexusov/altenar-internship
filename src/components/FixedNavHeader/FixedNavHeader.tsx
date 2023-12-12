import { StyledFixedNavHeader, StyledFixedNavItems } from '../../styles/StyledComponents/FixedNavHeader';
import { StyledText, TextStyleTypes } from '../../styles/StyledComponents/Text';
import HeaderNavLink from 'components/HeaderNavLink/HeaderNavLink';
import NavArrowIcon from 'components/Icons/NavArrowIcon/NavArrowIcon';

const FixedNavHeader = () => {
  return (
    <StyledFixedNavHeader className="header">
      <StyledFixedNavItems className="header__nav header-nav">
        <HeaderNavLink src="/">
          <NavArrowIcon />
          <StyledText type={TextStyleTypes.Navigation}>Вернуться к списку</StyledText>
        </HeaderNavLink>
      </StyledFixedNavItems>
    </StyledFixedNavHeader>
  )
}

export default FixedNavHeader;