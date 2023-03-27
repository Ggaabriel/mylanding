import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ActionButton from '../../shared/ActionButton';

const ScrollDownButton = () => {
  const handleClick = () => {
    scroll.scrollToBottom({ smooth: true });
  };

  return (
    <button onClick={handleClick}>
      <ActionButton chidren={"вниз"} />
    </button>
  );
};

export default ScrollDownButton;
