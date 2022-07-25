import React from 'react';
import s from './Guide.module.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from 'next/image'
import beach from '../../public/png/beach.png'
import small from '../../public/png/small.png'
import park from '../../public/png/park.png'
import BlueArrow from "../../assets/svg/BlueArrow";

const Guide = () => {
  return (
    <div className={s.wrapper}>
      <SectionTitle title={'Путеводитель'} arrow={true}/>
      <div className={s.itemWrapper}>
        <div className={s.mainItemWrapper}>
          <Image alt={'beach'} src={beach} style={{borderRadius: '10px'}}  height={360} width={224}/>
          <div className={s.descWrapper}>
            <div className={s.title}>Геленджик</div>
            <div className={s.desc}>Где отдохнуть в курортном городе?</div>
            <div className={s.txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis amet, pellentesque egestas accumsan.</div>
            <BlueArrow  style={{position: 'absolute', right: '28px', bottom: '31px'}}/>
          </div>
        </div>

        <div>
          <div className={s.mainItemWrapperSmall}>
            <Image style={{borderRadius: '10px'}} src={small} width={152} height={160}/>
            <div className={s.smallDescWrapper}>
              <div className={s.smallDesc}>Краснодар</div>
              <div className={s.smallTxt}>Куда пойти в столице юга России?</div>
            </div>
          </div>

          <div className={s.mainItemWrapperSmall}>
            <Image style={{borderRadius: '10px'}} src={small} width={152} height={160}/>
            <div className={s.smallDescWrapper}>
              <div className={s.smallDesc}>Краснодар</div>
              <div className={s.smallTxt}>Куда пойти в столице юга России?</div>
            </div>
          </div>
        </div>
        <div className={s.parkWrapper}>
          <Image src={park} width={416} height={192}/>
          <div className={s.txtWrapper}>
            <div className={s.city}>Санкт-Петербург</div>
            <div className={s.description}>Самые озелененные районы города</div>
            <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis amet, pellentesque egestas accumsan.</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Guide;
