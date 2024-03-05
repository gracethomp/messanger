import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/common";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getAllChats } from "../../store/services/chat.service";

const ChatPage = () => {
  const navigate = useNavigate();
  const chats = useAppSelector((state) => state.chat.chats);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      {chats.map((value) => (
        <div key={value.id}>
          <p>{value.user1 + ' ' + value.user2}</p>
        </div>
      ))}
      <Button onClick={() => navigate("/new-chat")}>Create new chat</Button>
    </div>
  );
};

export default ChatPage;
