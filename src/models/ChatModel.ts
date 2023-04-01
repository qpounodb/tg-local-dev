import { action, computed, makeObservable, observable } from 'mobx';

import { ChatMessageModel } from './ChatMessageModel';

type PrivateFields = '_list';

export class ChatModel {
  private _list: ChatMessageModel[] = [];

  get list(): ChatMessageModel[] {
    return this._list;
  }

  constructor(private readonly _user: UserType) {
    makeObservable<this, PrivateFields>(this, {
      _list: observable,
      list: computed,
      handleNewMessage: action,
    });
  }

  readonly destroy = (): void => {
    this._list = [];
  };

  readonly send = (text: string): void => {
    if (!text) {
      return;
    }

    this.handleNewMessage({
      userId: this._user.id,
      username: this._user.username,
      text,
    });
  };

  readonly handleNewMessage = (raw: RawChatMessageType): void => {
    const message = ChatMessageModel.fromJson(raw, this._user.id);
    this._list.push(message);
  };
}
