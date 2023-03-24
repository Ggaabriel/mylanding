import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import aang from "../../assets/scene/aang.png"
import sokka from "../../assets/scene/sokka.png"
import katara from "../../assets/scene/katara.png"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    setText: (value: string) => void;
};

const FindingAangAnim = ({ setSelectedPage, setText }: Props) => {
    const section = useRef<HTMLDivElement>(null);

    return (

        <section
            id={`${SelectedPage.FindingAangAnim}`}
            className="py-20 my-20"
            ref={section}
        >
            <motion.div
                className="md:h-[80vh] max-w-screen border mx-auto relative"
                onViewportEnter={() =>{
                    setSelectedPage(SelectedPage.FindingAangAnim)
                    setText("И однажды Сокка и Катара находят Аанга последнего аватара")
                }}
            >
                <div className="flex flex-col">
                    <div className="relative">
                        <img src={aang} alt="" className="h-[36vh]"/>
                        <div className="bg-bodyColor w-[36vw] h-[36vh] rounded-[100%] absolute top-0 opacity-40"></div>
                    </div>
                    <div className="flex ml-auto">
                                            <img src={sokka} alt="" className="h-[36vh]"/>
                    <img src={katara} alt="" className="h-[36vh]"/>
                    </div>
 

                </div>
            </motion.div>
        </section>
    );
};

export default FindingAangAnim;
