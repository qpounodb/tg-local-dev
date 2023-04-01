import * as React from 'react';

import ErrorBoundary from './ErrorBoundary';

export const withErrorBoundary =
  (PageComponent: React.FC<React.ComponentProps<any>>) =>
  // eslint-disable-next-line react/display-name
  (props: React.ComponentProps<any>) =>
    (
      <ErrorBoundary>
        <PageComponent {...props} />
      </ErrorBoundary>
    );

export default withErrorBoundary;
