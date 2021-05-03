import { FC } from 'react';
import styles from './Main.module.scss';

export const Main: FC = ({children}) => {


    return (
        <div className={styles.main_row}>
            <div className={styles.main_col}>
                {children}
            </div>
        </div>
    );
};