import cn from 'classnames';
import * as React from 'react';

import { ChatAlias } from 'configs/chat';
import { ChatMessageModel } from 'models/ChatMessageModel';

import s from './ChatItem.module.scss';
import CrownIcon from './CrownIcon';

export type ChatItemProps = {
  message: ChatMessageModel;
} & PropsWithClassName;

const ChatItem: React.FC<ChatItemProps> = ({ message, className }) => {
  return (
    <div className={cn(s.wrapper, className)}>
      {message.isLeading && <CrownIcon className={s.crown} />}
      <span className={cn(s.user, message.isAccentOnUser && s.userAccent)}>
        {message.isLeading
          ? ChatAlias.moderator
          : message.wasSentByMe
          ? ChatAlias.self
          : message.username}
      </span>
      <span className={s.message}>{message.text}</span>
    </div>
  );
};

export default React.memo(ChatItem);
