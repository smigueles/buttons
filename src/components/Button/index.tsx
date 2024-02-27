import { getVariant, Variants, getIcon, getSize } from "./constants";

const Button = ({
  variant = "default",
  disableShadow,
  color,
  disabled,
  startIcon,
  endIcon,
  size = "md",
}: {
  variant?: string;
  disableShadow?: boolean;
  color?: string;
  disabled?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: string;
}) => {
  const buttonVariant = getVariant(disabled, disableShadow, color)[
    variant as keyof Variants
  ];

  const buttonSize = getSize(size);

  const StartIcon = getIcon(startIcon);
  const EndIcon = getIcon(endIcon);

  return (
    <button
      disabled={disabled}
      className={` flex flex-row justify-evenly items-center rounded-md ${buttonVariant} p-2 m-5 ${buttonSize} ${
        (!!StartIcon || !!EndIcon) && "!w-[112px]"
      }`}
    >
      {!!StartIcon && <StartIcon />}
      <p>{variant || color}</p>
      {!!EndIcon && <EndIcon />}
    </button>
  );
};

export default Button;
