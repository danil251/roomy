import React from 'react';
import s from './ChoiceItem.module.css'
import Image from "next/image";
import example from '../../../public/png/example.png'
import Star from "../../../assets/svg/Star";
import WhitePower from "../../../assets/svg/WhitePovwr";

const ChoiceItem = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div>
          <Image src={example}/>
        </div>
        <div className={s.padd}>
          <div className={s.hotel}>Отель 5 звезд</div>
          <div className={s.name}>Hotel Resort Spa Sochi City</div>
          <div className={s.rait}><Star style={{marginRight: '6px'}}/>8,4 <div className={s.rewiev}>Отлично (18 отзывов)</div></div>
          <div className={s.smallItemWrapper}>
            <div className={s.flex}>
              <div className={s.num}>Номер “Стандарт”</div>
              <div>3 600₽ / 2 ночи</div>
            </div>
            <div className={s.flex}>
              <div >1 взрослый, 2 ребенка</div>
              <div className={s.blue}><WhitePower style={{marginLeft: '1px'}}/> </div>
            </div>
          </div>
          <div className={s.smallItemWrapper}>
            <div className={s.flex}>
              <div className={s.num}>Номер “Стандарт”</div>
              <div>3 600₽ / 2 ночи</div>
            </div>
            <div className={s.flex}>
              <div >1 взрослый, 2 ребенка</div>
              <div className={s.blue}><WhitePower style={{marginLeft: '1px'}}/> </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.day}><div className={s.name}>3 600Р</div> / 2 ночи</div>
        <div className={s.ad}>Бесплатная отмена бронирования</div>
        <div className={s.ad}>Питание включено (только завтраки)</div>
        <div className={s.ad}>Можно с детьми и животными</div>
        <div>svg</div>
        <div className={s.city}>Сочи, Абрикосовая улица 5А</div>
        <div className={s.location}>200м до центра города</div>
      </div>
    </div>
  );
};

export default ChoiceItem;
