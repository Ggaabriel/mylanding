import { motion } from "framer-motion";
import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchImage, fetchToggleLike } from "../../redux/comments/asyncActions";
import { setLike } from "../../redux/comments/slice";
import { Comments } from "../../redux/comments/types";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import chineese from "../../assets/images/chineese.png";
import iconOffline from "../../assets/images/icon.png";
type Props = {};

const Skeleton = (props: Props) => {
    return (
        <div className="p-5 bg-bodyColor border-borderColor border-4 opacity-0">
            <div className=" min-h-[400px] w-72 flex flex-col justify-between text-center">
                <div className="flex justify-between h-full">
                    <div className="flex flex-col justify-between">
                        <img className=" w-10" src={chineese} alt="" />
                        <img className="scale-y-[-1] w-10" src={chineese} alt="" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-6xl text-4xl font-bold p-4">
                        </h1>
                        <img className="w-1/2 h-1-2" src={iconOffline} alt="картинка" />
                    </div>
                    
                    <div className="flex flex-col justify-between ">
                        <img className="scale-x-[-1] w-10" src={chineese} alt="" />
                        <img className="rotate-180 w-10" src={chineese} alt="" />
                    </div>
                </div>

                <p className="text-2xl"></p>

                <div className="flex items-center justify-between ">
                    <div className="pl-5"></div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
