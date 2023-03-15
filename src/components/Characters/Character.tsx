import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CharactersItems } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";

type Props = {
    characters: CharactersItems[];
    isLoading: boolean;
};

const Character = ({ isLoading, characters }: Props) => {
    const [imageSrc, setImageSrc] = useState<string | undefined>();

    useEffect(() => {
        if (characters[0]) {
            import(`../../${characters[0].image}`).then((image) => {
                setImageSrc(image.default);
            });
        }
    }, [characters[0]]);
    return !isLoading ? (
        <div className="flex flex-col md:flex-row md:items-center h-full ">
            <div className="md:w-1/2 flex flex-col gap-12 flex-shrink-0 md:pl-12">
                <h1 className="md:text-6xl text-4xl font-bold">{characters[0].title}</h1>
                <p className="text-2xl">{characters[0].description}</p>
                <div>
                    <ActionButton chidren={" Смотреть трейлер"} />
                </div>
                
            </div>
            <div className="order-first md:order-none w-full h-full flex items-center justify-center">
                <img className="max-h-full" src={imageSrc} alt="character" />
            </div>
        </div>
    ) : (
        <div>Загрузка падажжи билять!!</div>
    );
};

export default Character;
