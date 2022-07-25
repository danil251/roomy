import React from 'react';
import s from './Service.module.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import Lightning from "../../assets/svg/Lightning";
import Key from "../../assets/svg/Key";
import Link from "next/link";
import Headphones from "../../assets/svg/Headphones";

const Service = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.leftWrapper}>
        <SectionTitle title='О сервисе' arrow={false}/>
        <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus faucibus iaculis gravida nulla augue curabitur. Vitae lectus aliquam eu consectetur. In massa volutpat vitae leo vivamus lacus. Metus mattis platea tincidunt fermentum placerat condimentum mi.</div>
        <div className={s.itemWrapper}>
          <div className={s.item} style={{background: '#EFF7FA', width: '192px'}}>
            <div className={s.itemTitle} style={{color: '#00AEEF'}}><Lightning style={{position: 'absolute', left: '14px', top: '21px'}}/> Мнгновенная бронь</div>
            <div className={s.itemText} style={{color: '#438CA7'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus faucibus iaculis gravida nulla augue</div>
          </div>
          <div className={s.item} style={{background: '#FBF8EF', width: '224px'}}>
            <div className={s.itemTitle} style={{color: '#575757'}}><Key style={{position: 'absolute', left: '13px', top: '21px'}}/>Самостоятельный заезд</div>
            <div className={s.itemText} style={{color: '#9F9D89'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor at cursus lobortis in.Lorem ipsum dolor sit amet, consectetur adipiscing </div>
          </div>
        </div>
      </div>
      <div className={s.rightWrapper}>
        <div className={s.links}>
          <Link href='/'><a className={s.link}>Как сдать свое жилье?</a></Link>
          <Link href='/'><a className={s.link}>Как сдать свое жилье?</a></Link>
          <Link href='/'><a className={s.link}>Помощь в регистрации на сайте</a></Link>
          <Link href='/'><a className={s.link}>Я не помню свой пароль, что делать?</a></Link>
          <Link href='/'><a className={s.link}>Как отменить бронь?</a></Link>
          <Link href='/'><a className={s.link}>Я не помню свой пароль, что делать?</a></Link>
          <Link href='/'><a className={s.btn}><Headphones style={{marginRight: '7px'}}/> Поддержка</a></Link>
        </div>
      </div>

    </div>
  );
};

export default Service;
