import * as React from 'react';

import { ChatView } from 'components/ChatView';
import { Header } from 'components/Header';
import { USER_LIST } from 'tests/samples/chat.sample';

import s from './Chat.module.scss';

const Chat: React.FC = () => {
  const [user] = React.useState(() => USER_LIST[0]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Header>
          Игра начнется
          <br />
          через
        </Header>
      </div>
      <div className={s.chat}>
        <ChatView user={user} />
      </div>
    </div>
  );
};

export default Chat;
