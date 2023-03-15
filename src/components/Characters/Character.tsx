import React from "react";
import { motion } from "framer-motion";
import { CharactersItems } from "../../shared/types";

type Props = {
};

const Character = ({}: Props) => {
    
    return (
        <motion.div className="	h-3/4 w-3/4 bg-bodyColor rounded-xl">
            <div>

            </div>
            <div></div>
        </motion.div>
    );
};

export default Character;
