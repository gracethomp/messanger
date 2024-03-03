import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { loginUser } from "../../store/services";
import { Button, Input } from "../../ui/common";

type InputPlaceholders = {
  placeholder: string;
  value: string;
  method: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    dispatch(loginUser({ email: username, password: password }));
  };

  const inputPlaceholders: InputPlaceholders[] = [
    {
      placeholder: "E-mail",
      value: username,
      method: (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    },
    {
      placeholder: "Password",
      value: password,
      method: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <h1 className="text-4xl">Hi! Please log in</h1>
      {inputPlaceholders.map((value) => (
        <Input placeholder={value.placeholder} value={value.value} onChange={value.method}/>
      ))}
      <Button onClick={() => handleLogin()}>Log in</Button>
    </div>
  );
};

export default LoginPage;
