import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import CancelIcon from "@mui/icons-material/Cancel";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

type materialIcon = OverridableComponent<SvgIconTypeMap>;

export const getIcon = (iconName?: string): materialIcon | string | undefined =>
  iconName &&
  {
    faceIcon: FaceIcon,
    cancelIcon: CancelIcon,
    doneIcon: DoneIcon,
    addShoppingCartIcon: AddShoppingCartIcon,
    favoriteIcon: FavoriteIcon,
  }[iconName];

export interface Variants {
  default: string;
  outlined: string;
  text: string;
}

type color = string;

const getColor = (color: color): color | undefined =>
  ({
    primary: "!bg-primary !text-white hover:!bg-primary-hover",
    secondary: "!bg-secondary !text-white hover:!bg-secondary-hover",
    danger: "!bg-danger !text-white hover:!bg-danger-hover",
  }[color]);

export const getVariant = (
  disabled?: boolean,
  disableShadow?: boolean,
  color?: string
): Variants => ({
  default: `bg-default hover:bg-default-hover drop-shadow-md hover:border-0 hover:border-transparent focus:bg-default-hover focus:outline-none ${
    disabled && "!bg-[#E0E0E0] hover:!bg-[#E0E0E0] !text-[#9E9E9E]"
  } ${disableShadow && "drop-shadow-none"} ${
    !disabled && color && getColor(color)
  }`,
  outlined:
    "bg-white text-custom-blue border-1 border-custom-blue hover:bg-[#2962FF1A] focus:border-custom-blue focus:outline-none focus:bg-[#2962FF1A]",
  text: `bg-transparent hover:bg-[#2962FF1A] text-custom-blue hover:border-0 hover:border-transparent focus:bg-[#2962FF1A] focus:outline-none  ${
    disabled && "hover:bg-transparent !text-[#9E9E9E]"
  } `,
});

type size = string | undefined;

export const getSize = (size: size): size | undefined =>
  size &&
  { md: "w-[81px] h-[36px]", sm: "w-[73px] h-[32px]", lg: "w-[93px] h-[42px]" }[
    size
  ];
