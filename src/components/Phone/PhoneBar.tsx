import PhoneBatteryIcon from "components/Icons/PhoneBatteryIcon/PhoneBatteryIcon";
import PhoneTimeIcon from "components/Icons/PhoneTimeIcon/PhoneTimeIcon";
import PhoneWifiIcon from "components/Icons/PhoneWifiIcon/PhoneWifiIcon";
import { StyledPhoneBar, StyledPhoneBarSVGGroup } from "styles/StyledComponents/Phone";

const PhoneBar = () => {
  return (
    <StyledPhoneBar>
        <StyledPhoneBarSVGGroup>
          <PhoneTimeIcon />
        </StyledPhoneBarSVGGroup>
        <StyledPhoneBarSVGGroup>
          <PhoneWifiIcon />
          <PhoneBatteryIcon />
        </StyledPhoneBarSVGGroup>
    </StyledPhoneBar>
  )
}

export default PhoneBar;