import React from 'react';
import Nav from "../Nav/Nav";
import s from './Header.module.css'
import YellowBullshit from "../../assets/svg/YellowBullshit";
import SmallLogo from "../../assets/svg/SmallLogo";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <Nav/>
      <div className={s.titleWrapper}>
        <YellowBullshit/>
        <div className={s.title}>новый сервис бронирования <br/> в россии!</div>
        <div className={s.textWrap}><div className={s.text}>Путешествуй по стране вместе с</div> <SmallLogo style={{marginTop: '16px'}}/></div>
      </div>
    </div>
  );
};

export default Header;

