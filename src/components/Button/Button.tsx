import cn from 'classnames';
import * as React from 'react';

import s from './Button.module.scss';

type ButtonProps = PropsWithChildren &
  PropsWithClassName & {
    onClick?: VoidFunction;
    block?: boolean;
    color?: 'red' | 'champagne' | 'outline';
    loading?: boolean;
  };

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  block = false,
  color = 'red',
  loading = false,
}: ButtonProps) => (
  <button
    className={cn(
      s.button,
      className,
      block && s.button_block,
      color && s[`button_${color}`]
    )}
    onClick={onClick}
  >
    <div className={cn(s.button__title, loading && s.button__title_hidden)}>
      {children}
    </div>
  </button>
);

export default Button;
