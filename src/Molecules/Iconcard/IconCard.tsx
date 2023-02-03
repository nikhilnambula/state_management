import { Icon1, Icon2, Icon3 } from "./SvgIcons";
import "./IconCard.css";
export default function IconCard() {
  return (
    <div className="icon_card">
      <Icon1 />
      <div className="v_line" />
      <Icon2 />
      <div className="v_line" />
      <Icon3 />
    </div>
  );
}
