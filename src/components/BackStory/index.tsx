import React, { createRef, RefObject} from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const BackStory = ({ setSelectedPage }: Props) => {
    // let shipRef:RefObject<HTMLImageElement> = createRef();
    // gsap.to(shipRef,{
    //     x:"100px",
    // })
    const historyText: string[] = [
        "Однажды народ огня развязал войну",
        "И когда аватар был нужен, он пропал...",
        "И однажды Сокка и Катара находят Аанга последнего аватара",
        "Так и началось приключение наших героев!"
    ]
    return (
        <section
            id={`${SelectedPage.BackStory}`}
            className="py-20"
        >
            <motion.div
                className="md:h-[980px] max-w-[1920px] border mx-auto"
                onViewportEnter={() => setSelectedPage(SelectedPage.BackStory)}
            >
                <div className="md:flex md:justify-end">
                    <div className="bg-bodyColor rounded-xl w-full md:w-[800px] min-h-1/4 max-w- flex items-center flex-col">
                        <div className="md:text-6xl text-4xl font-bold">
                            {historyText[0]}
                        </div>
                        <ActionButton chidren={"Смотреть трейлер"} />
                    </div>
                </div>
                <div className="md:flex flex-shrink-1">
                    <img
                    // ref = {shipRef}
                    src={lodka}
                    alt=""
                    className="" />
                    <img src={soldier} alt="" />
                </div>

            </motion.div>
        </section>
    );
};

export default BackStory;