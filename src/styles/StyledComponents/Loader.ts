import styled from "styled-components";
import { colors } from "styles/Variables";

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%; 
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, ${colors.primary} 94%,#0000) top/9px 9px no-repeat,
  conic-gradient(#0000 30%,#2196f3);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
  animation: spinner-c7wet2 1s infinite linear;

  @keyframes spinner-c7wet2 {
  100% {
    transform: rotate(1turn);
  }
}
`