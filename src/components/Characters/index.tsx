import React from 'react'
import { motion } from 'framer-motion';
import { CharactersItems, SelectedPage } from '../../shared/types';
import Character from './Character';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    characters: CharactersItems[];
}

const Characters = ({characters, setSelectedPage}: Props) => {
    return (
        <section>
            {/* Блок папа со всеми значениями */}
            <motion.div 
             className="max-w-[1400px] mx-auto py-20 md:h-[980px] flex items-center justify-center"
            >
                {/* Блок с информацией и картинкой */}
                <Character characters = {characters}/>
                {/* Пагинация между персонажами */}
                <div className="flex">

                </div>
            </motion.div>
        </section>
    )
}

export default Characters