import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const HotelIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <g fill="none" fillRule="evenodd">
        <g fill={color}>
          <path d="M15 14h-2v-1c0-.552-.448-1-1-1H8c-.552 0-1 .448-1 1v1H5V7c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v7h-2v-1c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v1zM4 15h20c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1zm1 5h2v1c0 .552-.448 1-1 1s-1-.448-1-1v-1zm16 0h2v1c0 .552-.448 1-1 1s-1-.448-1-1v-1z"/>
        </g>
      </g>
    </svg>
  );
}
