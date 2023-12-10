import { StyledSVGStatusProps, StyledStatusSVG } from "styles/StyledComponents/StatusSVG";

const StatusIcon: React.FC<StyledSVGStatusProps> = ({ status }) => {
  return (
    <StyledStatusSVG status={status} className="status-container--warning" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4.5" cy="4.5" r="4.5" />
    </StyledStatusSVG>
  )
}

export default StatusIcon;
