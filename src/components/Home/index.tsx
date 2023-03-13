import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { SelectedPage } from '../../shared/types';
import aang from '../../assets/images/AangClip.png';
import { ReactComponent as Telegram} from "../../assets/images/telegram.svg"
import { ReactComponent as Dribbble} from "../../assets/images/dribbble.svg"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreens: boolean;
}

const Home = ({ isAboveMediumScreens, setSelectedPage }: Props) => {
    const clipButton = "polygon(0.00% 75.64%,9.82% 67.63%,0.00% 59.87%,0.00% 32.81%,41.26% 28.07%,0.18% 24.87%,0.00% 0.00%,100.00% 0.00%,100.00% 44.61%,89.37% 56.47%,100.00% 68.84%,100.00% 100%,0.00% 100%)";
    return (
        <section className="py-20 font-caveat bg-bodyColor text-textColor w-full md:h-[980px]">
            <div className="max-w-[1400px] mx-auto md:flex md:relative h-full items-center">
                <div className="z-10 gap-10 flex flex-col items-start">
                    <h1 className="md:text-9xl text-7xl font-bold">Аватар: последний маг воздуха</h1>
                    <div className="">
                        <p className="md:text-6xl text-4xl font-bold">До выхода премьеры
                            20:20:20</p>
                    </div>
                    <p className="md:text-4xl text-3xl">
                        Успейте посмотреть трейлер по подписке netflixXXX
                        до выхода премьеры!
                    </p>
                    <button style={{clipPath:clipButton}} className="hover:rotate-6 transition duration-500 block px-10 py-7 rounded-xl md:text-2xl text-2xl bg-woodColor font-bellota text-white font-light">Смотреть трейлер</button>
                        <div className="bg-pinkClip bg-cover w-60 h-24 text-white text xl flex flex-col justify-center gap-4 pl-6">
                            <p>наши соц сети</p>
                            <div className='flex gap-4'>
                                <button className='hover:rotate-45 transition duration-500'>
                                    <Dribbble />
                                </button>
                                <button className='hover:rotate-45 transition duration-500'>
                                    <Telegram />
                                </button>
                            </div>
                        </div>
                </div>
                <div className="md:absolute md:right-0 z-1 w-[70%] animate-levitate">
                    <img
                        className=""
                        src={aang}
                        alt="Avatar: последний маг воздуха"
                    />
                </div>
            </div>
        </section>
    );

    //   )
}

export default Home