import React, {useEffect, useState} from 'react';
import s from './Search.module.css'
import Selection from "./Selection/Selection";
import SecondarySelection from "./SecondarySelection/SecondarySelection";
import SentenceItem from "./SentenceItem/SentenceItem";

const Search = () => {

  const cities = ['Москва', 'Санкт-Петербург', 'Екатеринбург', 'Тюмень', 'Томск', 'Челябинск', 'Курган', 'Миасс', 'Красноярск', 'Краснодар', 'Сочи']

  const [searchInput, setSearchInput] = useState('')
  const [focus, setFocus] = useState(false)
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)

  useEffect(() => {
    const onClick = () => setFocus(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const item = cities.filter(f => f.toLowerCase().includes(searchInput.toLowerCase())).map((item, index) =>
    <div key={index} className={s.searchItem} onClick={() => {
      setSearchInput(item)
      setFocus(false)
    }}>{item}</div>)

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.inputWrapper}>
          <div className={s.beforeTxt} onClick={e => e.stopPropagation()}>
            <input placeholder='Куда хотите поехать?' className={focus? `${s.inputBlue} ${s.openBlock}` : s.inputBlue} type="text" value={searchInput}
                   onChange={(e) => setSearchInput(e.currentTarget.value)} onClick={() => setFocus(!focus)}/>
            <div className={focus ? `${s.visible} ${s.drop}` : s.drop}>{item}</div>
          </div>
          <Selection title='Вид жилья' item={['Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка', 'Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка']}/>
          <Selection title='Гости' item={['Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка', 'Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка']}/>
          <Selection title='Заезд' item={['Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка', 'Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка']}/>
          <Selection title='Отъезд' item={['Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка', 'Квартира', 'Комната', 'Дом', 'Вилла', 'Палатка']} style={{paddingLeft: '24px'}}/>
        </div>
        <div className={s.secondarySelectionWrapper}>
          <div className={s.flex}>
            <SecondarySelection active={active1} setActive={setActive1} title='Самостоятельный заезд'/>
            <SecondarySelection active={active2} setActive={setActive2} title='Мнгновенная бронь'/>
          </div>
          <div className={s.btn}>Найти</div>
        </div>
      </div>
      <div className={s.wrapperSentence}>
        <SentenceItem city='Москва' amount='2 взрослых' period='28 мая 2022 - 29 мая 2022'/>
        <SentenceItem city='Сочи' amount='2 взрослых' period='28 мая 2022 - 29 мая 2022'/>
      </div>
    </div>

  );
};

export default Search;
