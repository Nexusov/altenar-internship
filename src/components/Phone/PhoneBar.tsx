import PhoneBatteryIcon from "components/Icons/PhoneBatteryIcon/PhoneBatteryIcon";
import PhoneTimeIcon from "components/Icons/PhoneTimeIcon/PhoneTimeIcon";
import PhoneWifiIcon from "components/Icons/PhoneWifiIcon/PhoneWifiIcon";
import { StyledPhoneBar, StyledPhoneBarSVGGroup } from "styles/StyledComponents/Phone";

const PhoneBar = () => {
  return (
    <StyledPhoneBar>
        <StyledPhoneBarSVGGroup className="top-bar__item top-bar-time">
          <PhoneTimeIcon />
        </StyledPhoneBarSVGGroup>
        <StyledPhoneBarSVGGroup className="top-bar__item top-bar-indicators">
          <PhoneWifiIcon />
          <PhoneBatteryIcon />
        </StyledPhoneBarSVGGroup>
    </StyledPhoneBar>
  )
}

export default PhoneBar;