import * as React from 'react';

import { ChatInput } from 'components/ChatView/components';

import s from './ChatInputPage.module.scss';

const ChatInputPage: React.FC = () => {
  return (
    <div className={s.container}>
      <ChatInput />
    </div>
  );
};

export default ChatInputPage;
