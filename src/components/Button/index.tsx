const Button = ({ variant }: { variant: string }) => {
  interface Variants {
    success: string;
    error: string;
  }

  const colorVariants: Variants = {
    success: "bg-default hover:default-hover",
    error: "bg-red-600 hover:bg-red-500",
  };

  return (
    <div className={`${colorVariants[variant as keyof Variants]} p-4 m-5`}>
      <h1>Esto es un botón {variant}</h1>
    </div>
  );
};

export default Button;
