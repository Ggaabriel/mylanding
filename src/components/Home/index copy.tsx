import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { SelectedPage } from '../../shared/types';
import aang from '../../assets/images/AangClip.png'


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreens: boolean;
}

const Home = ({ isAboveMediumScreens, setSelectedPage }: Props) => {
    //   return (
    //     <section
    //     id={SelectedPage.Home}
    //     className="gap-16 bg-bodyColor py-10 md:h-full md:pb-0 "
    //     >
    //         {/* Картинка на фон и контент */}
    //         <div  >
    //             <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
    //                 <img className='h-48' src={aang} alt="" />
    //             </div>
    //             {/* Контент */}
    //             <div>

    //             </div>
    //         </div>

    //     </section>
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-36 font-caveat bg-bodyColor text-textColor">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                <div className="z-10 grid grid-cols-1 md:grid-rows-1 md:grid-cols-1 gap-8  md:order-1">
                    <h1 className="md:text-9xl text-7xl font-bold">Аватар: последний маг воздуха</h1>
                    <div className="flex flex-col md:flex-row  md:items-center gap-2 ">
                        <p className="md:text-6xl text-4xl font-bold">До выхода премьеры
                            20:20:20</p>
                    </div>
                    <p className="md:text-4xl text-xl">
                        Успейте посмотреть трейлер по подписке netflixXXX
                        до выхода премьеры!
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full">Смотреть трейлер</button>
                </div>
                <div className="md:order-2 md:absolute right-0">
                    <img
                        className="w-full h-auto md:object-cover md:h-full"
                        src={aang}
                        alt="Avatar: последний маг воздуха"
                    />
                </div>
            </div>
        </div>
    );

    //   )
}

export default Home