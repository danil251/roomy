import React from 'react';
import s from './Nav.module.css'
import Logo from "../../assets/svg/Logo";
import QuestionMark from "../../assets/svg/QuestionMark";
import LoginButton from "../LoginButton/LoginButton";

const Nav = () => {
  return (
    <div className={s.wrapper}>
      <Logo style={{marginTop: 7}}/>
      <div className={s.nav}> <svg width="635" height="2" viewBox="0 0 635 2" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M635 1.00006L0 1" stroke="white" strokeDasharray="5 5"/></svg></div>
      <div className={s.support}><QuestionMark/>
        <div style={{marginLeft: '10px'}}>Поддержка</div>
      </div>
      <div className={s.rentOutHousing}><QuestionMark/>
        <div style={{marginLeft: '10px'}}>Сдать жилье</div>
      </div>
      <LoginButton color={true}/>
    </div>
  );
};

export default Nav;
