import { Button, Input } from "../../ui/common";

const LoginPage = () => {
  const inputPlaceholders: string[] = ["email", "password"];

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-8">
      <h1 className="text-4xl">Hi! Please log in</h1>
      {inputPlaceholders.map((value) => (
        <Input placeholder={value} />
      ))}
      <Button>Log in</Button>
    </div>
  );
};

export default LoginPage;
