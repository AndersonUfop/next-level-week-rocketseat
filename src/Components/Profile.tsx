import { useContext } from 'react';
import { ChallangesContext } from '../context/ChallangesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallangesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/AndersonUfop.png" alt="Anderson Fernandes"/>
      <div>
        <strong>Anderson Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level { level }
        </p>
      </div>
    </div>
  );
}