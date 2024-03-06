import { FC } from "react";
import { Chat } from "../../utils/types";
import { Button } from "../common";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentChat } from "../../store/slices/chatSlice";

type ChatProps = {
  chat: Chat;
};

const PrivateChat: FC<ChatProps> = (props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.email);

  return (
    <div className="p-20 h-screen">
      <div>
        <div className="bg-black p-4 rounded-xl">
          <p className="text-white font-bold text-3xl ">
            {props.chat.user1 === user ? props.chat.user2 : props.chat.user1}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-2">
        <Button onClick={() => dispatch(setCurrentChat(undefined))}>
          Back to the all chats
        </Button>
      </div>
    </div>
  );
};

export default PrivateChat;
