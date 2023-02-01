import React from "react";
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericProps {
  list: IItem[];
}

// Функция, которая ничего не делает (заполнитель для onClick)
const noop = () => {};

// Компонент, который может рендерить абсолютно любые списки
export function GenericList({ list }: IGenericProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = noop, className, id, href }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}


// const prevJsxs = [
//   <li key={0}>Content One 0</li>
//   <li key={1}>Content One 1</li>
//   <li key={2}>Content One 2</li>
//   <li key={3}>Content One 3</li>
//   <li key={4}>Content One 4</li>
// ]

// // После удаления 3-го элемента React пересчитывает индексы и думает, что мы удалили
// // 4-й элемент и поменяли контент у 3-го
// const jsxs = [
//   <li key={0}>Content One 0</li>
//   <li key={1}>Content One 1</li>
//   <li key={2}>Content One 2</li>
//   <li key={3}>Content One 4</li>
// ]
