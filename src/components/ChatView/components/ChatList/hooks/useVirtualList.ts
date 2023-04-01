import { useVirtualizer } from '@tanstack/react-virtual';
import { throttle } from 'lodash-es';
import {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from 'react';

import { ChatModel } from 'models/ChatModel';

const SCROLL_THRESHOLD_IN_PX = 50;
const VIRTUAL_LIST_OVERSCAN = 5;

export const useVirtualList = (chatModel: ChatModel) => {
  const refScrollable = useRef<HTMLDivElement | null>(null);

  const [followOutput, setFollowOutput] = useState(true);
  const [isHandleScroll, setIsHandleScroll] = useState(true);

  const count = chatModel.list.length;

  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => refScrollable.current,
    estimateSize: () => SCROLL_THRESHOLD_IN_PX,
    overscan: VIRTUAL_LIST_OVERSCAN,
  });

  // автопрокрутка при появлении новых сообщений
  useLayoutEffect(() => {
    if (!followOutput || count < 1) {
      return;
    }

    virtualizer.scrollToIndex(count - 1, {
      behavior: 'auto',
      align: 'end',
    });

    setIsHandleScroll(true);
  }, [count, followOutput, virtualizer]);

  // включение автопрокрутки если список чата был прокручен донизу
  const handleScroll = useCallback(
    () =>
      throttle(() => {
        const scrollableElement = refScrollable.current;

        if (!isHandleScroll || !scrollableElement) {
          return;
        }

        const listHeight =
          scrollableElement.getBoundingClientRect().height +
          SCROLL_THRESHOLD_IN_PX;

        const isScrolledBottom =
          scrollableElement.scrollHeight - scrollableElement.scrollTop <=
          listHeight;

        setFollowOutput(isScrolledBottom);
      }, 100)(),
    [isHandleScroll]
  );

  useEffect(() => {
    const scrollableElement = refScrollable.current;

    scrollableElement?.addEventListener('scroll', handleScroll);

    return () => {
      scrollableElement?.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // обработчик для кнопки прокрутки списка чата до конца
  const handleScrollDown = useCallback(() => {
    setIsHandleScroll(false);
    setFollowOutput(true);
  }, []);

  return {
    refScrollable,
    virtualizer,
    followOutput,
    handleScrollDown,
  };
};
