import { ChangeEvent, FC } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="border rounded-xl p-4 text-xl w-80 outline-none"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
