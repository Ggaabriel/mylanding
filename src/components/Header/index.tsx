import React from 'react';
import logo from '../../assets/images/logoEtflix.png';
import Link from './Link';

type Props = {
    // Выбранная страница
    selectedPage: string;
    // Метод устанавливающий страницу
    setSelectedPage:(page:string) => void;
}

const Header = ({selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    return <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16 text-xl`}>
                    {/* Навигационные ссылки */}
                    <div className={`navigate ${flexBetween} gap-8 `}>
                        <Link page={`О персонажах`}
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link page={`Предыстрория`}
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link page={`Преимущества`}
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link page={`Отзывы`}
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                        <Link page={`Обратная связь`}
                        selectedPage = {selectedPage}
                        setSelectedPage = {setSelectedPage}
                        />
                    </div>
                    {/* Логотип */}
                    <div style={{ clipPath: "polygon(0.00% 0.00%,100.00% 0.00%,100.00% 100%,50% 70%,0.00% 100%)" }} className={`w-24 h-24 bg-aangPink flex items-center justify-center`}>
                        <img src={logo} alt="logo" />
                    </div>
                    {/* Обратная связь */}
                    <div className={`contact ${flexBetween} gap-8 `}>
                        <button>Войти</button>
                        <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                    </div>
                </div>

            </div>


        </div>
    </nav>
}

export default Header