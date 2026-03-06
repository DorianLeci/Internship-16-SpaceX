import styles from './EmptyState.module.scss';

interface EmptyStateOptions {
  message: string;
}

const EmptyState = ({ message }: EmptyStateOptions) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default EmptyState;
