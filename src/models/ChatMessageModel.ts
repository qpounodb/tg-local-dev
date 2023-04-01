import { uniqueId } from 'lodash-es';

export class ChatMessageModel {
  get isAccentOnUser(): boolean {
    return this.isLeading || this.wasSentByMe;
  }

  constructor(
    public readonly id: string,
    public readonly userId: number,
    public readonly username: string,
    public readonly text: string,
    public readonly isLeading: boolean,
    public readonly wasSentByMe: boolean
  ) {}

  static fromJson(raw: RawChatMessageType, userId: number) {
    return new ChatMessageModel(
      uniqueId(),
      raw.userId,
      raw.username,
      raw.text,
      Boolean(raw.isLeading),
      userId === raw.userId
    );
  }
}
