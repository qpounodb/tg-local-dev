import * as React from 'react';

import { ErrorView } from 'components/ErrorView';
import { ErrorMessageId, ERROR_MESSAGE } from 'configs/error';
import { devLog } from 'utils/dev';

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<React.ComponentProps<any>, State> {
  state: State = { hasError: false };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true });
    devLog(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <ErrorView>{ERROR_MESSAGE[ErrorMessageId.default]}</ErrorView>
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default ErrorBoundary;
