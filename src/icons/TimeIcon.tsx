import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const TimeIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M14 3c6.075 0 11 4.925 11 11s-4.925 11-11 11S3 20.075 3 14 7.925 3 14 3zm0 3a1 1 0 0 0-1 1v7a1 1 0 0 0 .2.6l3 4a1 1 0 0 0 1.6-1.2L15 13.667V7a1 1 0 0 0-1-1z" id="a"/>
      </defs>
      <use fill={color} xlinkHref="#a" fillRule="evenodd"/>
    </svg>
  );
}
