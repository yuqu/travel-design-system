import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const ArrowDownIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M14 17.586 5.707 9.293a1 1 0 1 0-1.414 1.414l9 9a1 1 0 0 0 1.414 0l9-9a1 1 0 1 0-1.414-1.414L14 17.586z" id="a"/>
      </defs>
      <use fill={color} xlinkHref="#a" fillRule="evenodd"/>
    </svg>

  );
}
