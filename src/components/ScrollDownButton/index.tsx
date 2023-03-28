import { ArrowDownIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import ActionButton from '../../shared/ActionButton';

const ScrollDownButton = () => {
  const handleClick = () => {
    scroll.scrollToBottom({ smooth: true });
  };

  return (
    <button onClick={handleClick} className="font-medium p-3 bg-woodColor rounded-xl animate-bounce">
        <ArrowDownIcon className='w-10 h-10 text-white'  />
    </button>
  );
};

export default ScrollDownButton;
