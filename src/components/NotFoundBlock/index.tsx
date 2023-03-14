import React from "react";
import styles from "./NotFound.module.scss";

export const NotFoundBlock: React.FC = () => { 
  return (
    <div className="container">
      <div className={styles.root}>
        <h1 className={styles.smile}>&#128565;</h1>
        <h1>Ничего не найдено</h1>
        <br />
        <h3>Возможно стоит выбрать что-нибудь другое</h3>
      </div>
    </div>
  );
}