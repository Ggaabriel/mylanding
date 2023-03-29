import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CharactersItems } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";

type Props = {
    characters: CharactersItems[];
    isLoading: boolean;
    hero: number;
};

const Character = ({ isLoading, characters, hero }: Props) => {

    return !isLoading ? (
        <div className="flex flex-col md:flex-row md:items-center h-full ">
            <div className={`md:w-1/2 flex flex-col gap-12 flex-shrink-0 md:pl-12 transition-opacity duration-500 ${characters[0].id != hero?" animate-die":" animate-born"}`}>
                <h1 className="md:text-6xl text-4xl font-bold">{characters[0].title}</h1>
                <p className="text-2xl">{characters[0].description}</p>
                <div>
                    <ActionButton chidren={" Смотреть трейлер"} />
                </div>
            </div>
            <div className={`order-first md:order-none w-full h-full flex items-center justify-center transition-opacity duration-500 ${characters[0].id != hero?" animate-die":" animate-born"} `}>
                <img className="max-h-full" src={characters[0].image ? characters[0].image : ""} alt="character" />
            </div>
        </div>
    ) : (

                    <div className="flex flex-col md:flex-row md:items-center h-full opacity-0">
            <div className={`md:w-1/2 flex flex-col gap-12 flex-shrink-0 md:pl-12 transition-opacity duration-500`}>
                <h1 className="md:text-6xl text-4xl font-bold">пусто</h1>
                <p className="text-2xl">Единственный оставшийся в живых представитель нации Воздушных кочевников, которые были уничтожены Народом Огня в нулевом году ПГ. Он является Аватаром - человеком, способным использовать все четыре вида магии:воздуха, воды, земли и огня</p>
                <div>
                    <ActionButton chidren={" Смотреть трейлер"} />
                </div>
            </div>
            <div className={`order-first md:order-none w-full h-full flex items-center justify-center transition-opacity duration-500 `}>
                <img className="max-h-full" src="assets/images/aang.png" alt="character" />
            </div>
        </div>
//тут должен быть блок со скелетоном но так как у нас красиво все то пустота
    );
};

export default Character;
