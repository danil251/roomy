import React, {useEffect, useState} from 'react';
import s from './Selection.module.css'

const Selection = ({title, item, style}) => {
  const [selected, setSelected] = useState(item[0])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onClick = () => setOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div onClick={e => e.stopPropagation()}>
      <div className={open? `${s.wrapper} ${s.openBlock}` : s.wrapper} onClick={() =>  setOpen(!open)} style={style}>
        <div className={s.title}>{title}</div>
        <div className={s.item}>{selected}</div>
        <div className={open ? `${s.visible} ${s.drop}` : s.drop}>{item.map((item, index) => <div key={index} className={s.searchItem} onClick={() => setSelected(item)}>{item}</div>)}</div>
      </div>
    </div>
  );
};

export default Selection;
