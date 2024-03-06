import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/common";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useEffect } from "react";
import { getAllChats } from "../../store/services/chat.service";
import { ChatCard } from "../../ui/chatRoom";

const ChatPage = () => {
  const navigate = useNavigate();
  const chats = useAppSelector((state) => state.chat.chats);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllChats({ token: token ?? "" }));
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5 p-5">
      <div className="overflow-y-auto max-h-[45rem] border border-gray-300 rounded-lg p-4">
        {chats.map((value, index) => (
          <ChatCard key={value.id} chat={value} index={index + 1} />
        ))}
      </div>
      <Button onClick={() => navigate("/new-chat")}>Create new chat</Button>
    </div>
  );
};

export default ChatPage;
