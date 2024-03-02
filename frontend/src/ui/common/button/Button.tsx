import { FC, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return <button className='text-xl bg-black text-white rounded-xl p-4 w-80'>{props.children}</button>;
};

export default Button;
