import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../ui/common";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createChat } from '../../store/services';

const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const [email, setEmail] = useState<string>("");

  const handleButtonClick = () => {
    dispatch(createChat({user2: email, token: token ?? "" }));
    navigate("/login");
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <Input
        placeholder="user email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <Button onClick={handleButtonClick}>Create new chat</Button>
    </div>
  );
};

export default ChatPage;
