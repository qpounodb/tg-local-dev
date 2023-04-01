import * as React from 'react';

export enum ErrorMessageId {
  default = 'default',
}

export const ERROR_MESSAGE: Record<ErrorMessageId, JSX.Element> = {
  [ErrorMessageId.default]: (
    <>
      <h2>Произошла ошибка!</h2>
      <p>Перезагрузите приложение или попробуйте позже</p>
    </>
  ),
};
