import styles from './UpdateState.module.scss';

interface UpdateStateProps {
  message?: string;
}

const UpdateState = ({ message = 'Updating...' }: UpdateStateProps) => {
  return <div className={styles.updateContainer}>{message}</div>;
};

export default UpdateState;
