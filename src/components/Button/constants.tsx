export interface Variants {
    default: string;
    outlined: string;
    text: string;
  }

  export const variants: Variants = {
    default:
      "bg-default hover:bg-default-hover drop-shadow-md hover:border-0 hover:border-transparent focus:bg-default-hover focus:outline-none",
    outlined:
      "bg-white text-[#3D5AFE] border-1 border-[#3D5AFE] hover:bg-[#2962FF1A] focus:border-[#3D5AFE] focus:outline-none focus:bg-[#2962FF1A]",
    text: "bg-white hover:bg-[#2962FF1A] hover:border-0 hover:border-transparent focus:bg-[#2962FF1A] focus:outline-none",
  };