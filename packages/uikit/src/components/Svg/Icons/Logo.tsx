import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <img src="images/zprotocol/about_img01.png" alt="" {...props}/>
  );
};

export default Icon;
