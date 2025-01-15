// Так как мы использовали хуки, то помечаем что это use client

import React from 'react';

type LessonProps = {
  title: string;
  shortSummary?: string;
};

// type LikeState = 'unset' | 'Liked' | 'dislike';

export const Lesson: React.FC<LessonProps> = ({ title, shortSummary }) => {
  return (
    <details>
      <summary>
        <h2>{title}</h2>
      </summary>

      <p>{shortSummary}</p>
    </details>
  );
};
