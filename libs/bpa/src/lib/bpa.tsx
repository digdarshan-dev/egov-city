import styles from './bpa.module.scss';

/* eslint-disable-next-line */
export interface BpaProps {}

export function Bpa(props: BpaProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Bpa!</h1>
    </div>
  );
}

export default Bpa;
