import styles from './Main.module.scss';
import cls from 'classnames';

export const Main = ({children}) => {


    return (
        <div className={cls([styles.main_row])}>
            <div className={cls([styles.main_col])}>
                {children}
            </div>
        </div>
    );
};