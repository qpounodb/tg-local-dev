import * as React from 'react';

import s from './ChatHeader.module.scss';

const ChatHeader: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Онлайн чат</div>
    </div>
  );
};

export default React.memo(ChatHeader);
