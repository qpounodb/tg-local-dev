import * as React from 'react';

type Props = {
  className?: string;
};

const CrownIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="20"
      viewBox="0 0 16 20"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <clipPath id="a">
        <path d="m0 2h16v16h-16z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path
          clipRule="evenodd"
          d="m0 7.34038 1.23077 5.41542h13.53843l1.2308-5.41542-3.9385 1.72308-4.0615-3.93846-4.06154 3.93846zm1.23078 5.90962.36923 1.7231h12.79999l.3692-1.7231z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default React.memo(CrownIcon);
