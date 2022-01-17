import { StyledLogoLink } from "./style";
import logo from "../../assets/images/logo.png";

export function Logo() {
  return (
    <StyledLogoLink to="/">
      <img
        alt="Application logo with a written laugh"
        src={logo}
        width={60}
        height={60}
      />
    </StyledLogoLink>
  );
}
