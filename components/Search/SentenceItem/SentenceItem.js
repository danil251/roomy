import React from 'react';
import Search from "../../../assets/svg/Search";
import s from './SentenceItem.module.css'

const SentenceItem = ({city, period, amount}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.city}>
        <div className={s.title}>{city}</div>
        <Search/>
      </div>
      <div className={s.txt}>{period}</div>
      <div className={s.txt}>{amount}</div>
    </div>
  );
};

export default SentenceItem;
