import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="8" cy="8.5" r="7.5" stroke="white"/>
    </Svg>
  );
};

export default Icon;
