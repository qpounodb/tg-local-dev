import * as React from 'react';

import { Button } from 'components/Button';
import { withErrorBoundary } from 'components/ErrorBoundary';
import { Chat } from 'pages/Chat';
import { ChatInputPage } from 'pages/ChatInputPage';
import { Vite } from 'pages/Vite';

import s from './Root.module.scss';

enum PageEnum {
  chatInput = 'chat input',
  chat = 'chat',
  vite = 'vite',
}

const pages: Record<PageEnum, React.FC> = {
  [PageEnum.chatInput]: ChatInputPage,
  [PageEnum.chat]: Chat,
  [PageEnum.vite]: Vite,
};

const Root: React.FC = () => {
  const [page, setPage] = React.useState(PageEnum.chat);

  const PageComponent = pages[page];

  return (
    <>
      <div className={s.fixedScreen}>
        <div className={s.pageWrapper}>
          <PageComponent />
        </div>
      </div>
      <nav className={s.fixedNav}>
        {Object.values(PageEnum).map((pageKey) => (
          <Button
            key={pageKey}
            color="outline"
            className={s.navButton}
            onClick={() => setPage(pageKey)}
          >
            {pageKey}
          </Button>
        ))}
      </nav>
    </>
  );
};

export default withErrorBoundary(Root);
