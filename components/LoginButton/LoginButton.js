import React from 'react';
import s from "./LoginButton.module.css";

const LoginButton = ({color}) => {
  return (
    <div className={s.btnWrapper}>
      <div className={s.registration} style={color? {background: '#fff'} : {background: '#00AEEF', color: '#fff'}}>Регистрация</div>
      <div className={s.exit} style={color? {background: '#00AEEF'} : {background: '#fff', border: '1px solid #00AEEF', color: '#00AEEF'}}>Вход</div>
    </div>
  );
};

export default LoginButton;
