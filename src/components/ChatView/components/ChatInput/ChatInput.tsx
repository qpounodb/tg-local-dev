import * as React from 'react';
import { SyntheticEvent, useCallback } from 'react';

import { SendIcon } from 'assets/icons';
import { CHAT_INPUT_PLACEHOLDER } from 'configs/chat';

import s from './ChatInput.module.scss';

export type ChatInputProps = {
  onSubmit: (value: string) => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSubmit }) => {
  const refInput = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = useCallback((event: SyntheticEvent) => {
    if (!refInput.current) {
      return;
    }

    event.preventDefault();
    onSubmit(refInput.current.value.trim());
    refInput.current.value = '';
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.wrapper}>
        <input
          className={s.input}
          type="text"
          placeholder={CHAT_INPUT_PLACEHOLDER}
          ref={refInput}
        />
        <button className={s.button} onClick={handleSubmit}>
          <SendIcon />
        </button>
      </div>
    </form>
  );
};

export default React.memo(ChatInput);
