type RawChatMessageType = {
  userId: number;
  username: string;
  text: string;
  isLeading?: boolean;
};

type ChatMessageType = RawChatMessageType & {
  id: string;
  wasSentByMe?: boolean;
};
