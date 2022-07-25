import React from 'react';
import s from './Choice.module.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import SimpleSlider from "./SimpleSlider";

const Choice = () => {
  return (
    <div className={s.wrapper}>
      <SectionTitle title='Выбор roomy' arrow={false}/>
      <SimpleSlider/>
    </div>
  );
};

export default Choice;
