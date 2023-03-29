import React from "react";
import { motion } from "framer-motion";
import { CharactersItems, SelectedPage } from "../../shared/types";
import Character from "./Character";
import aang from "../../assets/images/aangPag.png";
import katara from "../../assets/images/kataraPag.png";
import sokka from "../../assets/images/sokkaPag.png";
import zuko from "../../assets/images/zukoPag.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    characters: CharactersItems[];
    isLoading: boolean;
    hero: number;
    setHero: (value: number) => void;
};

const Characters = ({
    isLoading,
    characters,
    setSelectedPage,
    hero,
    setHero,
}: Props) => {
    return (
        <section id={`${SelectedPage.Characters}`}>
            {/* Блок папа со всеми значениями */}
            <motion.div
                className="font-caveat max-w-[1400px] mx-auto py-20 md:h-[980px] flex flex-col items-center justify-center gap-16"
                onViewportEnter={() => setSelectedPage(SelectedPage.Characters)}
            >
                {/* Блок с информацией и картинкой */}
                <motion.div className="h-3/4 w-3/4 bg-bodyColor rounded-xl py-4 px-4">
                    <Character isLoading={isLoading} characters={characters} hero={hero}/>
                </motion.div>
                {/* Пагинация между персонажами */}{" "}
                <div className="flex gap-6">
                    <button
                        onClick={() => {
                            setHero(0);
                        }}
                    >
                        <img src={aang} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            setHero(1);
                        }}
                    >
                        <img src={sokka} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            setHero(2);
                        }}
                    >
                        <img src={katara} alt="" />
                    </button>
                    <button
                        onClick={() => {
                            setHero(3);
                        }}
                    >
                        <img src={zuko} alt="" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Characters;
