import styles from './Error.module.scss';

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

const Error = ({ message, onRetry }: ErrorProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
};

export default Error;
