'use client';
// Так как мы использовали хуки, то помечаем что это use client

import React, { useState } from 'react';
import style from './lesson.module.css';

type LessonProps = {
  title: string;
  shortSummary?: string;
};

type LikeState = 'unset' | 'Liked' | 'dislike';

export const Lesson: React.FC<LessonProps> = ({ title, shortSummary }) => {
  const [like, setLike] = useState<LikeState>('unset');

  const handleSetLike = () => setLike('Liked');

  return (
    <div>
      <h2 className={style.header}>
        {title}{' '}
        <button type="button" onClick={handleSetLike}>
          {like === 'unset' ? 'like' : like}
        </button>
      </h2>
      <p>{shortSummary}</p>
    </div>
  );
};
