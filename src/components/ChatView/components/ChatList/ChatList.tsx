import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import { ArrowIcon } from 'assets/icons';
import { ChatModel } from 'models/ChatModel';

import s from './ChatList.module.scss';
import { ChatItem } from './components';
import { useVirtualList } from './hooks';

export type ChatListProps = {
  chatModel: ChatModel;
};

const ChatList: React.FC<ChatListProps> = ({ chatModel }) => {
  const { refScrollable, virtualizer, followOutput, handleScrollDown } =
    useVirtualList(chatModel);

  const items = virtualizer.getVirtualItems();

  return (
    <div className={s.wrapper}>
      <div ref={refScrollable} className={s.scrollable}>
        <div
          // выравнивание списка чата понизу, пока высота списка меньше высоты окна чата
          className={s.listOffset}
          style={{
            height: `calc(100% - ${virtualizer.getTotalSize()}px)`,
          }}
        />
        <div className={s.list} style={{ height: virtualizer.getTotalSize() }}>
          <div
            className={s.listInner}
            style={items[0] && { transform: `translateY(${items[0].start}px)` }}
          >
            {items.map((virtualRow) => (
              <div
                key={virtualRow.key}
                data-index={virtualRow.index}
                ref={virtualizer.measureElement}
              >
                <ChatItem
                  message={chatModel.list[virtualRow.index]}
                  className={s.item}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ArrowIcon
        className={cn(s.scrollDown, !followOutput && s.scrollDownShown)}
        onClick={handleScrollDown}
      />
    </div>
  );
};

export default observer(ChatList);
