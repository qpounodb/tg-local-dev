import * as React from 'react';

import { Button } from 'components/Button';

import s from './ErrorView.module.scss';

const restart = () => {
  window.location.reload();
};

type ErrorProps = PropsWithChildren;

const ErrorView: React.FC<ErrorProps> = ({ children }: ErrorProps) => (
  <div className={s.wrapper}>
    {children && <div className={s.text}>{children}</div>}
    <Button onClick={restart}>Закрыть</Button>
  </div>
);

export default React.memo(ErrorView);
