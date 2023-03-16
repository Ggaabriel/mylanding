import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage, TimeLeft } from "../../shared/types";
import aang from "../../assets/images/AangClip.png";
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg";
import { ReactComponent as Dribbble } from "../../assets/images/dribbble.svg";
import { motion } from "framer-motion";
import ActionButton from "../../shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreens: boolean;
};

const Home = ({ isAboveMediumScreens, setSelectedPage }: Props) => {
    // таймер, который отображает оставшееся время до 1 июля 2023 года в формате дней:часов:минут:секунд
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const targetDate = new Date("July 1, 2023 00:00:00");
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference <= 0) {
            // Если прошла целевая дата, то таймер закончил свою работу
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            calculateTimeLeft();
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <section
            id={`${SelectedPage.Home}`}
            className="py-20 font-caveat bg-bodyColor text-textColor w-full md:h-[980px]"
        >
            <motion.div
                className="max-w-[1400px] mx-auto md:flex md:relative h-full items-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <motion.div
                    className="z-10 gap-10 flex flex-col items-start "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="md:text-9xl text-7xl font-bold">
                        Аватар: последний маг воздуха
                    </h1>
                    <div className="">
                        <p className="md:text-6xl text-4xl font-bold">
                            До выхода премьеры <br />
                            {timeLeft.days} дней : {timeLeft.hours} часов :{" "}
                            {timeLeft.minutes} минут : {timeLeft.seconds} секунд
                        </p>
                    </div>
                    <p className="md:text-4xl text-3xl">
                        Успейте посмотреть трейлер по подписке netflixXXX до
                        выхода премьеры!
                    </p>
                    <ActionButton chidren={" Смотреть трейлер"} />
                    <div className="bg-pinkClip bg-cover w-60 h-24 text-white text xl flex flex-col justify-center gap-4 pl-6">
                        <p>наши соц сети</p>
                        <div className="flex gap-4">
                            <button className="hover:rotate-45 transition duration-500">
                                <Dribbble />
                            </button>
                            <button className="hover:rotate-45 transition duration-500">
                                <Telegram />
                            </button>
                        </div>
                    </div>
                </motion.div>
                <div className="md:absolute md:right-0 z-1 w-[70%] pr-4">
                    <img
                        className="animate-levitate"
                        src={aang}
                        alt="Avatar: последний маг воздуха"
                    />
                </div>
            </motion.div>
        </section>
    );

    //   )
};

export default Home;
