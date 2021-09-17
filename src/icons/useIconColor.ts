import { IconColor } from "./IconColor";
import { useTheme } from "../styled";

export const useIconColor = (color: IconColor) => {
  const { colors } = useTheme();
  return color === IconColor.GANDALF ? "#c1bec1" : colors[color];
}
