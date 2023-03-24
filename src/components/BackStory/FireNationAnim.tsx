import React, { useEffect, useRef } from "react";
import lodka from "../../assets/scene/lodka.png";
import soldier from "../../assets/scene/soldier.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    setText: (value: string) => void;
};

const FireNationAnim = ({setSelectedPage, setText}: Props) => {
    //тут находяттся ссылка на элементы
    const fireWalk = useRef<HTMLImageElement>(null);
    const fireWalk2 = useRef<HTMLImageElement>(null);
    const shipStart = useRef<HTMLImageElement>(null);
    const section = useRef<HTMLDivElement>(null);

    //Внутри (ударение на Э) юз Эффекта лежит анимация где персонажи пошатываются и двигаются вправа
    //а в конце им присваивается скроллтриггер чтобы по скроллу красиво все было
    useEffect(() => {

        //создается таймлайн чтобы анимации шли друг за другом
        const tl = gsap.timeline();

        //подключает скролл триггер
        gsap.registerPlugin(ScrollTrigger);

        //сама анимация где я для удобства подписал какой элемент анимируется 1-первый 2-второй

        //тут появляется корабль и дальше персонажи
        tl.fromTo(shipStart.current,{
            opacity:0,
            y:'-10vh'
        },{
            opacity:1,
            y:'0',
            duration:1
        })//1
        .fromTo(fireWalk2.current, {opacity:0},{
            opacity:1,
            duration: 0.4,
            x: "10vw",
            ease: "Power1.easeInOut",
        }) //2
            .fromTo(fireWalk.current,{opacity:0}, {
                opacity:1,
                duration: 0.4,
                x: "+=10vw",
                ease: "Power1.easeInOut",
            })
            //1
            .to(fireWalk2.current, {
                duration: 0.4,
                rotation: 20,
                x: "20vw",
                ease: "Power1.easeInOut",
            }) //2
            .to(fireWalk.current, {
                duration: 0.4,
                rotation: 20,
                x: "+=10vw",
                ease: "Power1.easeInOut",
            })
            //1
            .to(fireWalk2.current, {
                duration: 0.4,
                rotation: -20,
                x: "30vw",
                ease: "Power1.easeInOut",
            })
            //2
            .to(fireWalk.current, {
                duration: 0.4,
                rotation: -20,
                x: "+=10vw",
                ease: "Power1.easeInOut",
            })
            //1
            .to(fireWalk2.current, {
                duration: 0.4,
                rotation: 20,
                x: "40vw",
                ease: "Power1.easeInOut",
            }) //2
            .to(fireWalk.current, {
                duration: 0.4,
                rotation: 20,
                x: "+=10vw",
                ease: "Power1.easeInOut",
            })//1
            .to(fireWalk2.current, {
                duration: 0.4,
                rotation: 0,
                x: "50vw",
                ease: "Power1.easeInOut",
            }) //2
            .to(fireWalk.current, {
                duration: 0.4,
                rotation: 0,
                x: "+=10vw",
                ease: "Power1.easeInOut",
            });
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
        //блок секция
        <section
            id = {`${SelectedPage.FireNationAnim}`}
            className="py-20 my-20"
            ref={section}
        >
            {/* блок папа */}
            <motion.div
                className="md:h-[80vh] max-w-screen mx-auto relative overflow-hidden"
                onViewportEnter={() =>{
                    setSelectedPage(SelectedPage.FireNationAnim)
                    setText( "Однажды народ огня развязал войну")
                }}
            >
                
                <div className="md:flex flex-wrap nowrap">
                    {/* корабль */}
                    <img
                        ref={shipStart}
                        src={lodka}
                        alt=""
                        className="h-[64vh]"
                    />
                    {/* солдатики */}
                    <img
                        ref={fireWalk}
                        src={soldier}
                        alt=""
                        className="h-[36vh] absolute bottom-0"
                    />
                    <img
                        ref={fireWalk2}
                        src={soldier}
                        alt=""
                        className="h-[36vh]  absolute bottom-0 left-[20vw]"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default FireNationAnim;
