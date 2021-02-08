import styles from './Header.module.scss';
import cls from 'classnames';

export const Header = () => {


    return (
        <div className={styles.header}>
            <div className={styles.header_col}>
                <h1>
                    <span>JOVA</span>
                    <span>.</span>
                    <span className={styles.red}>DEV</span>
                </h1>
                <p>
                    Welcome to my&nbsp;
                    <span className={styles.crossed}>documentation</span>
                    &nbsp;portfolio site!</p>
                <p>
                    <span className={styles.link}>ABOUT</span>
                    <span> --- </span>
                    <span className={styles.link}>SKILLS</span>
                    <span> --- </span>
                    <span className={styles.link}>EXPERIENCE</span>
                </p>
            </div>
        </div>
    );
};