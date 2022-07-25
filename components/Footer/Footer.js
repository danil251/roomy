import React from 'react';
import s from './Footer.module.css'
import FooterLogo from "../../assets/svg/FooterLogo";
import LoginButton from "../LoginButton/LoginButton";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.navWrapper}>
        <div style={{width: '110px'}}><FooterLogo style={{marginTop: '3px'}}/></div>
        <div className={s.nav}> <svg width="1149" height="2" viewBox="0 0 1149 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1149 1.0001L0 1" stroke="#00AEEF" strokeDasharray="5 5"/>
        </svg></div>
      </div>
      <div className={s.middleWrapper}>
        <div className={s.linkWrapper}>
          <div className={s.mt}>
            <div className={s.item}>Поддержка</div>
            <div className={s.item}>Путеводитель</div>
          </div>
          <div>
            <div className={s.item}>О сервисе</div>
            <div className={s.item}>Приложение</div>
          </div>
        </div>
        <LoginButton color={false}/>
      </div>

      <div className={s.bottomWrapper}>
        <div className={s.copyrightWrapper}>
          <div className={s.titleCop}>Roomy 2022. Все права защищены</div>
          <div className={s.copyright}>Политика конфидециальности</div>
        </div>
        <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus et, ante tellus viverra quam et at lorem. Bibendum ullamcorper vivamus in semper. Convallis pellentesque sit non tincidunt nulla turpis nibh habitant nec. Adipiscing dolor facilisis diam maecenas bibendum. Eu, lectus metus egestas sit elit. Facilisi ornare vel turpis rhoncus porttitor pellentesque sociis et. Mauris placerat egestas volutpat cursus id nullam mi ut pellentesque. Enim condimentum tristique sagittis, pellentesque. Vulputate blandit nulla in aliquet.</div>
        <div className={s.rightSector}>Сайт разработан <div className={s.rightSector} style={{color: '#00AEEF', marginLeft: '3px'}}>Сектор бизнеса</div></div>
      </div>
    </div>
  );
};

export default Footer;
