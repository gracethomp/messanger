import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <button
      className="text-xl bg-black text-white rounded-xl p-4 w-80"
      onClick={handleClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
