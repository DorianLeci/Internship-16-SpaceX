import styles from './UpdateState.module.scss';

interface UpdateStateProps {
  message?: string;
}

const UpdateState = ({ message = 'Updating...' }: UpdateStateProps) => {
  return (
    <div className={styles.updateContainer}>
      <div className={styles.spinner}></div>
      <span className={styles.message}> {message}</span>
    </div>
  );
};

export default UpdateState;
