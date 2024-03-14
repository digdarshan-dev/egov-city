import styles from './tradeLicense.module.scss';

/* eslint-disable-next-line */
export interface TradeLicenseProps {}

export function TradeLicense(props: TradeLicenseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TradeLicense!</h1>
    </div>
  );
}

export default TradeLicense;
