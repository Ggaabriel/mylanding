import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FireNationAnim from "./FireNationAnim";
import GhostAvatarAnim from "./GhostAvatarAnim";
import FindingAangAnim from "./FindingAangAnim";
import AangOnGoraAnim from "./AangOnGoraAnim";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
//по задумке это компонента сетка где лежит 4 сюжетных блока и они анимируются друг за другом по триггеру
//и при этом постоянно видно блок с сюжетом и кнопкой 
const BackStory = ({ setSelectedPage }: Props) => {
    const [text, setText] = useState<string>("Однажды народ огня развязал войну")
    const historyText: string[] = [
        "Однажды народ огня развязал войну",
        "И когда аватар был нужен, он пропал...",
        "И однажды Сокка и Катара находят Аанга последнего аватара",
        "Так и началось приключение наших героев!",
    ];
    
    return (
        //блок секция с айди для библеотеки с переключением между блоками
        <section id={`${SelectedPage.BackStory}`} className="">

            {/* Блок с позитион стики чтобы быть приклееным к грид сетке который будет менять текст по мере скролла */}
            {/* при помощи той же библеотеки что в хедере */}
            <div className="md:flex md:justify-end sticky top-32 z-20">
                    <div className="opacity-70 bg-bodyColor rounded-xl w-full md:w-[800px] min-h-1/4 max-w- flex items-center flex-col">
                        <div className=" md:text-6xl text-4xl font-bold">
                            {text}
                        </div>
                        <ActionButton chidren={"Смотреть трейлер"} />
                    </div>
                </div>
            <motion.div
            // При попадание на глаза устанавливает выбранную страницу 
                onViewportEnter={() => setSelectedPage(SelectedPage.BackStory)}
                className="md:h-[400vh] max-w-screen grid grid-rows-2"
            >
                {/* Блоки с анимацией */}
                <FireNationAnim setSelectedPage={setSelectedPage} setText={setText}/>
                <GhostAvatarAnim setSelectedPage={setSelectedPage} setText={setText}/>
                <FindingAangAnim setSelectedPage={setSelectedPage} setText={setText}/>
                <AangOnGoraAnim setSelectedPage={setSelectedPage} setText={setText}/>
                
            </motion.div>
        </section>
    );
};

export default BackStory;
