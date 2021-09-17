import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const SearchIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path fill={color} fillRule="evenodd" d="M10.96 12.595A6.94 6.94 0 0 1 2.032 2.032a6.939 6.939 0 0 1 10.563 8.928l3.066 3.066a1.156 1.156 0 1 1-1.635 1.635l-3.066-3.066zm-.205-1.84a5.397 5.397 0 1 0-7.632-7.632 5.397 5.397 0 0 0 7.632 7.632z"/>
    </svg>
  );
}
