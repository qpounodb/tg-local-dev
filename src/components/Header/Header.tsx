import * as React from 'react';

import s from './Header.module.scss';

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.header}>
      <div className={s.count}>{children}</div>
    </div>
  );
};

export default Header;
