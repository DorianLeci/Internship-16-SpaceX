import type { FallbackProps } from 'react-error-boundary';
import ErrorComponent from '../Error';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const message =
    error instanceof Error ? error.message : 'Something went wrong';
  return <ErrorComponent message={message} onRetry={resetErrorBoundary} />;
};

export default ErrorFallback;
