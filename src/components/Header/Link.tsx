import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';


type Props = {
    // Название страницы
    page: string;
    // Выбранная страница
    selectedPage: SelectedPage;
    // Метод устанавливающий страницу
    setSelectedPage: (page: SelectedPage) => void;
    // Логотип
    logo?: string;
}

function Link({ page = "", selectedPage, setSelectedPage, logo }: Props) {

    // Переменная с айди в нижнем регистре без пробелов
    const toLoverCasePage: SelectedPage = page.replace(/ /gi, ``).toLowerCase() as SelectedPage;

    // Проверка на выбранную страницу если страница выбрана то сделай кнопку розовой
    const isSelectedText = selectedPage === toLoverCasePage ? "text-aangPink" : "";
    const isSelectedBg = selectedPage === toLoverCasePage ? "bg-aangPink" : "bg-woodColor";



    return (
        // Ссылка которая плавно переходит к нужном элементу страницы
        // Работает она путем проверки на лого, если оно существует то добавляй ховер эффект и отрисуй текст, если лого нет то рисуй блок с лого
        <AnchorLink

            className={`${isSelectedText} ${logo ? "" : "hover:text-aangPink transition duration-500"}`}
            href={`#${toLoverCasePage}`}
            onClick={() => setSelectedPage(toLoverCasePage)}
            
        >
            {logo &&
                <div style={{ clipPath: "polygon(0.00% 0.00%,100.00% 0.00%,100.00% 100%,50% 70%,0.00% 100%)" }} className={`${isSelectedBg} w-24 h-24  flex items-center justify-center hover:bg-aangPink transition duration-500 `}>
                    <img src={logo} alt="logo" />
                </div>
            }
            {logo ? "" : page}
        </AnchorLink>
    )
}

export default Link