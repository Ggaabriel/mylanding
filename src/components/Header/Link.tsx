import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    // Название страницы
    page: string;
    // Выбранная страница
    selectedPage: string;
    // Метод устанавливающий страницу
    setSelectedPage:(page:string) => void;
}

function Link({page, selectedPage , setSelectedPage}: Props) {
    const toLoverCasePage: string = page.replace(/ /gi,``).toLowerCase();
  return (
    <AnchorLink
    className={`${selectedPage === toLoverCasePage?"text-aangPink":""}
    transition duration-500 hover:text-aangPink
    `}
    href={`#${toLoverCasePage}`}
    onClick={()=> setSelectedPage(toLoverCasePage)}

    >
        {page}
    </AnchorLink>
  )
}

export default Link