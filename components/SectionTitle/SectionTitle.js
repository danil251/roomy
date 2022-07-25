import React from 'react';
import s from "./SectionTitle.module.css";
import SmallYellowBullshit from "../../assets/svg/SmallYellowBullshit";
import RightArrow from "../../assets/svg/RightArrow";

const SectionTitle = ({title, arrow}) => {
  return (
    <div className={s.titleWrapper} style={arrow? {cursor: 'pointer'} : {}}>
      <SmallYellowBullshit/>
      <div className={s.title}>{title}{arrow && <RightArrow style={{marginLeft: '20px'}}/>}</div>
    </div>
  );
};

export default SectionTitle;
