import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const ProfileIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28" height="28" viewBox="0 0 28 28">
      <defs>
        <path id="kprd7isj0a" d="M14 16c4.314 0 10 2.594 10 5.793 0 3.2-20 3.2-20 0S9.686 16 14 16zm0-12c2.761 0 5 2.462 5 5.5S16.761 15 14 15s-5-2.462-5-5.5S11.239 4 14 4z"/>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <use fill={color} xlinkHref="#kprd7isj0a"/>
        </g>
      </g>
    </svg>
  );
}
