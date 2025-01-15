import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

// Список всех категорий
const cats = [
  'Піци',
  'Комбо',
  'Закуски',
  'Коктейлі',
  'Кофе',
  'Напої',
  'Десерти',
];

// Активная категория
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const showCats = cats.map((cat, index) => (
    <a
      className={cn(
        'flex items-center font-bold h-11 rounded-2xl px-5',
        activeIndex === index &&
          'bg-white shadow-md shadow-gray-200 text-primary'
      )}
      href="#"
      key={index}
    >
      <button>{cat}</button>
    </a>
  ));

  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}
    >
      {showCats}
    </div>
  );
};
