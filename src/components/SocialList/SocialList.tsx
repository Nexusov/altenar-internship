import { useState } from "react";
import { StyledHeaderSocialList, StyledHeaderSocialListItem } from "styles/StyledComponents/Header";

const socialNetworks: string[] = ['instagram', 'vkontakte'];

const SocialList = () => {

  const [active, setActive] = useState(socialNetworks[0]);

  const handleItemClick = (item: string) => {
    setActive(item)
  }

  return (
    <StyledHeaderSocialList className="header__social-list">
      {socialNetworks.map(item => (
        <StyledHeaderSocialListItem
          key = {item}
          active = {active === item}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </StyledHeaderSocialListItem>
      ))}
    </StyledHeaderSocialList>
  )
}

export default SocialList;