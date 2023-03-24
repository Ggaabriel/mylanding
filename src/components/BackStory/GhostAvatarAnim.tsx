import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ghost from "../../assets/scene/ghostAvatar.png";
import gora from "../../assets/scene/gora.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    setText: (value: string) => void;
};

const GhostAvatarAnim = ({ setSelectedPage, setText }: Props) => {
    const section = useRef<HTMLDivElement>(null);
    const ghostAvatar = useRef<HTMLImageElement>(null);

    useEffect(() => {

        //создается таймлайн чтобы анимации шли друг за другом
        const tl = gsap.timeline();

        //подключает скролл триггер
        gsap.registerPlugin(ScrollTrigger);

        //сама анимация где я для удобства подписал какой элемент анимируется 1-первый 2-второй

        //тут появляется корабль и дальше персонажи
        tl.to(ghostAvatar.current, {
                duration: 0.4,
                y: "-=20%",
                ease: "Power1.easeInOut",
            })
             //2
            .to(ghostAvatar.current, {
                duration: 0.4,
                rotation: 20,
                y: "-=20%",
                ease: "Power1.easeInOut",
            })
            //2
            .to(ghostAvatar.current, {
                duration: 0.4,
                rotation: -20,
                y: "-=20%",
                ease: "Power1.easeInOut",
            })
            //2
            .to(ghostAvatar.current, {
                duration: 0.4,
                rotation: 0,
                y: "-=20%",
                ease: "Power1.easeInOut",
            })
            .to(ghostAvatar.current, {
                duration: 0.4,
                x:'-30vw',
                opacity:0
            })
            //тут вешается триггер на всю анимацию сразу а не на отдельное действие как обычно
        ScrollTrigger.create({
            trigger: section.current,
            start: "20% center",
            end: "60% 40%",
            scrub: true,
            animation: tl,

        });
    }, []);

    return (
        <section
            id={`${SelectedPage.GhostAvatarAnim}`}
            className="py-20 my-20"
            ref={section}
        >
            <motion.div
                className="md:h-[80vh] max-w-screen border mx-auto relative flex items-end justify-center py-20"
                onViewportEnter={() => {
                    setSelectedPage(SelectedPage.GhostAvatarAnim);
                    setText("И когда аватар был нужен, он пропал...");
                }}
            >
                {/* тут теневой аватар на горе */}
                <div className="flex">
                    <img ref={ghostAvatar} src={ghost} alt="" className="h-[36vh] absolute left-[40%]" />
                    <img src={gora} alt="" className="h-[32vh]" />
                </div>
            </motion.div>
        </section>
    );
};

export default GhostAvatarAnim;
