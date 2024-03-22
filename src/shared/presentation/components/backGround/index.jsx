import React from 'react';
import './background.scss';

const Background = () => {
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const style = {
      top: `${Math.random() * 99}%`, // Posición aleatoria en el eje Y
      left: `${Math.random() * 99}%`, // Posición aleatoria en el eje X
    };
    return <div key={index} className="star" style={style} />;
  });

  return <div className="star-background">{stars}</div>;
};

export default Background;