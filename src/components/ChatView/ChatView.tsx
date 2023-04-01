import cn from 'classnames';
import * as React from 'react';

import { ChatModel } from 'models/ChatModel';
import { generateDynamicChatLoadTest } from 'tests/chat.test';

import s from './ChatView.module.scss';
import { ChatHeader, ChatInput, ChatList } from './components';

type ChatViewProps = {
  user: UserType;
  isInModal?: boolean;
};

const { startTest, stopTest } = generateDynamicChatLoadTest();

const ChatView: React.FC<ChatViewProps> = ({ user, isInModal }) => {
  const [chatModel] = React.useState(() => new ChatModel(user));
  const [doTest, setDoTest] = React.useState(false);

  React.useEffect(() => {
    doTest ? startTest(chatModel) : stopTest();

    return stopTest;
  }, [doTest]);

  const handleSubmit = React.useCallback((text: string) => {
    chatModel.send(text);

    switch (text) {
      case '/start':
        setDoTest(true);
        break;
      case '/stop':
        setDoTest(false);
        break;
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <ChatHeader />
      </div>
      <div className={s.chat}>
        <ChatList chatModel={chatModel} />
      </div>
      <div className={cn(s.input, isInModal ? '' : s.input_far)}>
        <ChatInput onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default React.memo(ChatView);
