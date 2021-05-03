import React, { FC } from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderColumn>
        <HeaderTitle />
        <HeaderInfo />
        <HeaderMenu />
      </HeaderColumn>
    </HeaderWrapper>
  );
};

const HeaderWrapper: FC = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

const HeaderColumn: FC = ({ children }) => {
  return <div className={styles.header_col}>{children}</div>;
};

const HeaderTitle = () => {
  return (
    <h1>
      <span>JOVA</span>
      <span>.</span>
      <span className={styles.red}>DEV</span>
    </h1>
  );
};

const HeaderInfo = () => {
  return (
    <p>
      Welcome to my&nbsp;
      <span className={styles.crossed}>documentation</span>
      &nbsp;portfolio!
    </p>
  );
};

const HeaderMenu = () => {
  return (
    <p>
      <span className={styles.link}>ABOUT</span>
      <span> --- </span>
      <span className={styles.link}>SKILLS</span>
      <span> --- </span>
      <span className={styles.link}>EXPERIENCE</span>
    </p>
  );
};
