import styles from './SectionError.module.scss';

interface SectionErrorProps {
  message: string;
  onRetry?: () => void;
}

const SectionError = ({ message, onRetry }: SectionErrorProps) => {
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

export default SectionError;
