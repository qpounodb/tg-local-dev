import cn from 'classnames';
import { useState } from 'react';

import { ReactLogoSvg, ViteLogoSvg } from 'assets';

import s from './Vite.module.scss';

export const Vite: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.html}>
      <div className={s.body}>
        <div className={s.root}>
          <div className={s.app}>
            <div>
              <a
                className={s.link}
                href="https://vitejs.dev"
                target="_blank"
                rel="noreferrer"
              >
                <ViteLogoSvg className={s.logo} />
              </a>
              <a
                className={s.link}
                href="https://reactjs.org"
                target="_blank"
                rel="noreferrer"
              >
                <ReactLogoSvg className={cn(s.logo, s.react)} />
              </a>
            </div>
            <h1 className={s.title}>Vite + React</h1>
            <div className={s.card}>
              <button
                className={s.button}
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className={s.readTheDocs}>
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vite;
