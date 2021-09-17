import React, { FunctionComponent } from "react";

import { IconColor } from "./IconColor";
import { useIconColor } from "./useIconColor";

interface IconProps {
  color?: IconColor;
}

export const RestaurantIcon: FunctionComponent<IconProps> = ({
  color: colorKey = IconColor.PINK
}) => {
  const color = useIconColor(colorKey);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
      <g fill="none" fillRule="evenodd">
        <g fill={color}>
          <path d="M12.25 4c.414 0 .75.336.75.75v5.45l-.007.004C12.863 12.035 11 12.534 11 13.5v9c0 .828-.672 1.5-1.5 1.5S8 23.328 8 22.5v-9c0-.965-1.863-1.465-1.993-3.296L6 10.2V4.75c0-.414.336-.75.75-.75s.75.336.75.75v3.125c0 .345.28.625.625.625s.625-.28.625-.625V4.75c0-.414.336-.75.75-.75s.75.336.75.75v3.125c0 .345.28.625.625.625s.625-.28.625-.625V4.75c0-.414.336-.75.75-.75zm9.597-.182c.098.094.153.224.153.36V22.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V16c-1 0-2-.5-2-1.5 0-4.246 1.38-7.803 4.14-10.669.191-.199.508-.205.707-.013z"/>
        </g>
      </g>
    </svg>
  );
}
