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
    const aangRef = useRef<HTMLImageElement>(null);
    const sokkaRef = useRef<HTMLImageElement>(null);
    const kataraRef = useRef<HTMLImageElement>(null);

        useEffect(() => {
            //создается таймлайн чтобы анимации шли друг за другом
            const tl = gsap.timeline();

            //подключает скролл триггер
            gsap.registerPlugin(ScrollTrigger);
    
            //сама анимация где я для удобства подписал какой элемент анимируется 1-первый 2-второй
    
            //тут появляется корабль и дальше персонажи
            tl
            .to(sokkaRef.current,{
                duration: 0.4,
                x: "-5vw",
                ease: "Power1.easeInOut",
            }) //2
                .to(kataraRef.current, {
                    duration: 0.4,
                    x: "-=5vw",
                    ease: "Power1.easeInOut",
                })
                //1
                .to(sokkaRef.current, {
                    duration: 0.4,
                    rotation: 20,
                    x: "-10vw",
                    ease: "Power1.easeInOut",
                }) //2
                .to(kataraRef.current, {
                    duration: 0.4,
                    rotation: 20,
                    x: "-=5vw",
                    ease: "Power1.easeInOut",
                })
                //1
                .to(sokkaRef.current, {
                    duration: 0.4,
                    rotation: -20,
                    x: "-15vw",
                    ease: "Power1.easeInOut",
                })
                //2
                .to(kataraRef.current, {
                    duration: 0.4,
                    rotation: -20,
                    x: "-=5vw",
                    ease: "Power1.easeInOut",
                })
                //1
                .to(sokkaRef.current, {
                    duration: 0.4,
                    rotation: 20,
                    x: "-20vw",
                    ease: "Power1.easeInOut",
                }) //2
                .to(kataraRef.current, {
                    duration: 0.4,
                    rotation: 20,
                    x: "-=5vw",
                    ease: "Power1.easeInOut",
                })//1
                .to(sokkaRef.current, {
                    duration: 0.4,
                    rotation: 0,
                    x: "-25vw",
                    ease: "Power1.easeInOut",
                }) //2
                .to(kataraRef.current, {
                    duration: 0.4,
                    rotation: 0,
                    x: "-=5vw",
                    ease: "Power1.easeInOut",
                })
                .to(aangRef.current, {
                    duration:0.4,
                    x:"30vw"
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
            id={`${SelectedPage.FindingAangAnim}`}
            className="py-20 my-20"
            ref={section}
        >
            <motion.div
                className="md:h-[80vh] max-w-screen mx-auto relative overflow-hidden "
                onViewportEnter={() =>{
                    setSelectedPage(SelectedPage.FindingAangAnim)
                    setText("И однажды Сокка и Катара находят Аанга последнего аватара")
                }}
            >
                <div className="flex flex-col ">
                    <div className="relative">
                        <img ref={aangRef} src={aang} alt="" className="w-[15vw] h-[20vw] ml-[10vw] mt-[5vw]"/>
                        <div className="bg-iceColor w-[30vw] h-[30vw] rounded-[100%] absolute top-0 opacity-40"></div>
                    </div>
                    <div className="flex ml-auto ">
                        <img ref={sokkaRef} src={sokka} alt="" className="h-[36vh]"/>
                        <img ref={kataraRef} src={katara} alt="" className="h-[36vh]"/>
                    </div>
 

                </div>
            </motion.div>
        </section>
    );
};

export default FindingAangAnim;
