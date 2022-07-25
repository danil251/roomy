import React from 'react';
import s from './SecondarySelection.module.css'

const SecondarySelection = ({title, active, setActive}) => {
  return (
    <div className={active? `${s.wrapper} ${s.active}` : s.wrapper} onClick={() => setActive(!active)}>
      <div>{title}</div>
    </div>
  );
};

export default SecondarySelection;
