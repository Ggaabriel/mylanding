import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ActionButton from '../../shared/ActionButton';

const ScrollDownButton = () => {
  const handleClick = () => {
    scroll.scrollToBottom({ smooth: true });
  };

  return (
    <button onClick={handleClick} className="font-medium p-6 bg-woodColor rounded-xl">
        Вниз
    </button>
  );
};

export default ScrollDownButton;
