import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    setText: (value: string) => void;
};

const GhostAvatarAnim = ({ setSelectedPage, setText }: Props) => {
    const section = useRef<HTMLDivElement>(null);

    return (

        <section
            id={`${SelectedPage.GhostAvatarAnim}`}
            className=""
            ref={section}
        >
            <motion.div
                className="md:h-[80vh] max-w-screen border mx-auto relative"
                onViewportEnter={() =>{
                    setSelectedPage(SelectedPage.GhostAvatarAnim)
                    setText( "И когда аватар был нужен, он пропал...")
                }}
            >
                {/* тут теневой аватар на горе */}
            </motion.div>
        </section>
    );
};

export default GhostAvatarAnim;
