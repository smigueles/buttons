import { variants, Variants } from "./constants";

const Button = ({
  variant,
  disableShadow,
  color,
}: {
  variant: string;
  disableShadow?: boolean;
  color?: string;
}) => {
  return (
    <button
      className={`${
        variants[variant as keyof Variants]
      } p-4 m-5 w-20 h-9 flex justify-center items-center rounded-md ${
        disableShadow && "drop-shadow-none"
      }`}
    >
      {variant}
    </button>
  );
};

export default Button;
