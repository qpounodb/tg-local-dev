import { ReactNode } from 'react';

declare global {
  type PropsWithClassName = {
    className?: string;
  };

  type PropsWithChildren = {
    children: ReactNode;
  };
}
