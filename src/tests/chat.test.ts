import { random, sample, shuffle } from 'lodash-es';
import { useEffect } from 'react';

import { ChatModel } from 'models/ChatModel';

import { USER_LIST, MESSAGE_LIST } from './samples/chat.sample';

const generateChatMessage = (): RawChatMessageType => {
  const user = sample(USER_LIST) ?? USER_LIST[0];
  let message = sample(MESSAGE_LIST) ?? MESSAGE_LIST[0];

  switch (random(1, 4)) {
    case 1:
      message = shuffle(message.split(/\s/)).join(' ');
      break;
    case 2:
      message = message.repeat(random(1, 3));
      break;
    case 3:
      message = [...message].reverse().join('');
      break;
  }

  return {
    userId: user.id,
    username: user.username,
    text: message,
    isLeading: user.id === USER_LIST[2].id,
  };
};

const CHAT_LOAD_TEST_COUNT = 10000;

export const generateStaticChatLoadTest = (
  chatModel: ChatModel,
  count = CHAT_LOAD_TEST_COUNT
): void => {
  Array(count)
    .fill(null)
    .map(generateChatMessage)
    .forEach(chatModel.handleNewMessage);
};

export const generateDynamicChatLoadTest = (): {
  startTest: (chatModel: ChatModel) => void;
  stopTest: () => void;
} => {
  let timerId: NodeJS.Timeout;

  const stopTest = () => clearTimeout(timerId);

  const startTest = (chatModel: ChatModel): void => {
    chatModel.handleNewMessage(generateChatMessage());
    timerId = setTimeout(startTest, random(0, 500), chatModel);
  };

  return {
    startTest,
    stopTest,
  };
};

export const useDynamicChatLoadTest = (chatModel: ChatModel) => {
  useEffect(() => {
    const { startTest, stopTest } = generateDynamicChatLoadTest();
    startTest(chatModel);

    return stopTest;
  }, []);
};
