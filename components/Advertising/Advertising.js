import React from 'react';
import s from './Advertising.module.css'
import Image from "next/image";
import googlePlay from '../../public/png/gogglePlay.png'
import appStore from '../../public/png/appStore.png'
const Advertising = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className={s.title}>Скачай наше приложение и бронируй в любом удобном месте!</div>
        <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus faucibus iaculis gravida nulla augue curabitur. Vitae lectus aliquam eu consectetur. In massa volutpat vitae leo vivamus lacus. Metus mattis platea tincidunt fermentum placerat condimentum mi.</div>
        <div>
          <a href='https://www.google.ru/' style={{marginRight: '8px'}}><Image src={appStore} alt='appStore'/></a>
          <a href='https://www.google.ru/'><Image src={googlePlay} alt='googlePlay'/></a>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
