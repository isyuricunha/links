import Arrow from "./Icons/Arrow";
import Clock from "./Icons/Clock";
import Cube from "./Icons/Cube";
import Dribbble from "./Icons/Dribbble";
import Link from "./Icons/Link";
import Octocat from "./Icons/Octocat";
import LinkedIn from "./Icons/LinkedIn";
import Mail from "./Icons/Mail";
import Star from "./Icons/Star";
import Tools from "./Icons/Tools";
import Yummygum from "./Icons/Yummygum";

const iconElements = (props) => ({
  arrow: <Arrow {...props} />,
  clock: <Clock {...props} />,
  cube: <Cube {...props} />,
  link: <Link {...props} />,
  dribbble: <Dribbble {...props} />,
  octocat: <Octocat {...props} />,
  linkedin: <LinkedIn {...props} />,
  mail: <Mail {...props} />,
  star: <Star {...props} />,
  tools: <Tools {...props} />,
  yummygum: <Yummygum {...props} />,
});

const Icon = ({ name, ...props }) => <>{iconElements(props)[name]}</>;

export const icons = Object.keys(iconElements());

export default Icon;
