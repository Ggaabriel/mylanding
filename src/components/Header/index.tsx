import React from "react";
import logo from "../../assets/images/logoEtflix.png";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

type Props = {
    // Выбранная страница
    selectedPage: SelectedPage;
    // Метод устанавливающий страницу
    setSelectedPage: (page: SelectedPage) => void;

    isTopOfPage: boolean;

    isAboveMediumScreens: boolean;
};

const Header = ({
    isAboveMediumScreens,
    isTopOfPage,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const flexBetween = "flex items-center justify-between";

    const [isMenuToggle, setMenuToggle] = React.useState<boolean>(false);
    const [isHistoryMenuToggle, setHistoryMenuToggle] =
        React.useState<boolean>(false);
    const headerScrollBackground = isTopOfPage ? "" : "bg-bodyColor";
    const pages: string[] = [
        `О персонажах`,
        `Предыстрория`,
        `Преимущества`,
        `Отзывы`,
        `Обратная связь`,
    ];
    const history: string[] = [
        "Начало",
        "Пропажа",
        "Новая надежда",
        "Начало путешествия"
    ]
    return (
        <nav className="font-bold text-xl">
            <div
                className={`${headerScrollBackground} ${flexBetween} fixed top-0 z-30 w-full`}
            >
                <div className={`${flexBetween} mx-auto w-[1400px]`}>
                    {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full gap-16 `}>
                            {/* Навигационные ссылки */}
                            <div className={`${flexBetween} gap-8 `}>
                                {/* Тут есть проверка на блок предыстории на его итерации делается кнопка с выпадающим меню */}
                                {pages.map((elem, i) =>
                                    i === 1 ? (
                                        <div key={i} className="flex flex-col pt-6">
                                            <Link 
                                                page={elem}
                                                selectedPage={selectedPage}
                                                setSelectedPage={
                                                    setSelectedPage
                                                }
                                            />
                                            <button
                                                className="mx-auto"
                                                onClick={() =>setHistoryMenuToggle(!isHistoryMenuToggle)}
                                            >
                                                <ChevronDownIcon className="w-6 h-6" />
                                                {isHistoryMenuToggle && (
                                                    <div className="absolute z-30 bg-woodColor flex flex-col gap-6 p-6 text-white rounded-xl">
                                                        {history.map(elem=> 
                                                           <Link 
                                                           page={elem}
                                                           selectedPage={selectedPage}
                                                           setSelectedPage={
                                                               setSelectedPage
                                                           }
                                                       />
                                                            )}
                                                    </div>
                                                )}
                                            </button>
                                        </div>
                                    ) : (
                                        <Link
                                            key={i}
                                            page={elem}
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    )
                                )}
                            </div>
                            {/* Логотип */}
                            <Link
                                page={`Главная`}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                logo={logo}
                            />

                            {/* Обратная связь */}
                            <div className={`contact ${flexBetween} gap-4 `}>
                                <button>Войти</button>
                                <a href="tel:+74951234567">+7(495)123-45-67</a>
                            </div>
                        </div>
                    ) : (
                        <div className={`${flexBetween} w-full gap-16 text-xl`}>
                            {/* Логотип */}
                            <Link
                                page={`Главная`}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                logo={logo}
                            />
                            <button
                                className="rounded-full bg-woodColor p-2"
                                onClick={() => setMenuToggle(!isMenuToggle)}
                            >
                                <Bars3Icon className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
            {!isAboveMediumScreens && isMenuToggle && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-woodColor">
                    {/* Кнопка закрывашка */}
                    <div className="flex justify-end py-9 pr-2">
                        <button onClick={() => setMenuToggle(!isMenuToggle)}>
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Менюшка */}
                    <div className="ml-[30%] flex flex-col gap-10 text-2xl text-white">
                        {pages.map((elem, i) =>
                            i === 1 ? (
                                <div  key={i} className="flex flex-col ">
                                    <Link
                                        page={elem}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <button
                                                className=""
                                                onClick={() =>setHistoryMenuToggle(!isHistoryMenuToggle)}
                                            >
                                                <ChevronDownIcon className="w-6 h-6" />
                                                {isHistoryMenuToggle && (
                                                    <div className=" bg-woodColor flex flex-col gap-6 p-6 text-white rounded-xl">
                                                        {history.map(elem=> 
                                                           <Link 
                                                           page={elem}
                                                           selectedPage={selectedPage}
                                                           setSelectedPage={
                                                               setSelectedPage
                                                           }
                                                       />
                                                            )}
                                                    </div>
                                                )}
                                            </button>
                                </div>
                            ) : (
                                <Link
                                    key={i}
                                    page={elem}
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
