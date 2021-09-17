import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const WeatherIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M4.307 15.13a1.122 1.122 0 0 0-.452-.445l-1.262-.675a1.122 1.122 0 0 1-.545-1.315l.415-1.37a1.122 1.122 0 0 0 0-.65l-.415-1.37a1.122 1.122 0 0 1 .545-1.315l1.262-.675c.195-.104.356-.265.46-.46l.675-1.262c.253-.472.803-.7 1.315-.545l1.37.415c.212.065.438.065.65 0l1.37-.415a1.122 1.122 0 0 1 1.315.545l.675 1.262c.09.17.224.313.385.416a8.009 8.009 0 0 0-1.34.806 4 4 0 1 0-5.442 5.864c-.38.348-.71.748-.98 1.19zm1.796-1.806A3 3 0 1 1 9.96 8.729a7.98 7.98 0 0 0-2.245 3.922 5.468 5.468 0 0 0-1.612.673zM21 22H9a4 4 0 1 1 .019-8 6.5 6.5 0 0 1 12.494-1.974A5 5 0 0 1 21 22z" id="a"/>
      </defs>
      <use fill={color} xlinkHref="#a" fillRule="evenodd"/>
    </svg>
  );
}
