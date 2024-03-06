import { FC } from "react";
import { Chat } from "../../utils/types";
import { useAppSelector } from "../../hooks/redux";

type ChatCardProps = {
  chat: Chat;
  index: number;
};

const ChatCard: FC<ChatCardProps> = (props) => {
  const user = useAppSelector((state) => state.auth.email);
  return (
    <div className="border border-4 rounded-xl text-2xl px-20 py-8 w-full cursor-pointer">
      <p className='font-bold'>{'Chat Room ' + props.index}</p>
      <p>{props.chat.user1 === user ? props.chat.user2 : props.chat.user1}</p>
    </div>
  );
};

export default ChatCard;
