import React from 'react'

type Props = {
    chidren: React.ReactNode;
}

const ActionButton = ({chidren}: Props) => {
    const clipButton = "polygon(0.00% 75.64%,9.82% 67.63%,0.00% 59.87%,0.00% 32.81%,41.26% 28.07%,0.18% 24.87%,0.00% 0.00%,100.00% 0.00%,100.00% 44.61%,89.37% 56.47%,100.00% 68.84%,100.00% 100%,0.00% 100%)";
  return (
    <button style={{clipPath:clipButton}} className="hover:rotate-6 transition duration-500 block px-10 py-7 rounded-xl md:text-2xl text-2xl bg-woodColor font-bellota text-white font-light">
        {chidren}
    </button>
  )
}

export default ActionButton