import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aang from '../../assets/scene/aang.png';
import gora from '../../assets/scene/gora.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    setText: (value: string) => void;
};

const AangOnGoraAnim = ({ setSelectedPage, setText }: Props) => {
    const section = useRef<HTMLDivElement>(null);

    return (

        <section
            id={`${SelectedPage.AangOnGoraAnim}`}
            className=""
            ref={section}
        >
            <motion.div
                className="md:h-[80vh] max-w-screen border mx-auto relative flex items-end justify-center py-20"
                onViewportEnter={() =>{
                    setSelectedPage(SelectedPage.AangOnGoraAnim)
                    setText( "Так и началось приключение наших героев!")
                }}
            >

                <div className="flex">
                    <img src={aang} alt="" className="h-[36vh] absolute left-[40%] top-40"/>
                    <img src={gora} alt="" className="h-[32vh]"/>
                </div>
            </motion.div>
        </section>
    );
};

export default AangOnGoraAnim;
