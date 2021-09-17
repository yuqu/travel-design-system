import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const MinusIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width="20" height="2" transform="translate(4 13)" fill={color}/>
    </svg>
  );
}
