import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchImage, postFlagLike, postTotalLike } from "../../redux/comments/asyncActions";
import { setLike } from "../../redux/comments/slice";
import { Comments } from "../../redux/comments/types";
import chineese from "../../assets/images/chineese.png";
import iconOffline from "../../assets/images/icon.png";
type Props = {};

const Comment = (props: Comments) => {
    const dispatch = useAppDispatch();
    const icon = useAppSelector((state) => state.comments.icon);
    const like = useCallback(async function like(id: number, like: boolean, totalLike:number) {
        const returnedLike = await dispatch(postFlagLike({id,like}));
        await dispatch(postTotalLike({id,like,totalLike}))
        await dispatch(setLike({ id: id, like: returnedLike.payload }));
    }, []);
    useEffect(()=>{
        async function image(){
            await dispatch(fetchImage(props.id))
        }
        image()
    },[])  
    return (
        <div className={`p-5 bg-bodyColor border-borderColor border-4 `}>
            <div className=" min-h-[400px] w-72 flex flex-col justify-between text-center">
                <div className="flex justify-between h-full">
                    <div className="flex flex-col justify-between">
                        <img className=" w-10" src={chineese} alt="" />
                        <img className="scale-y-[-1] w-10" src={chineese} alt="" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="md:text-6xl text-4xl font-bold">
                            {props.nickname}
                        </h1>
                        <img className="w-1/2 h-1-2" src={props.icon == ""? iconOffline: `${icon}`} alt="картинка" />
                    </div>
                    
                    <div className="flex flex-col justify-between ">
                        <img className="scale-x-[-1] w-10" src={chineese} alt="" />
                        <img className="rotate-180 w-10" src={chineese} alt="" />
                    </div>
                </div>

                <p className="text-2xl">{props.comment}</p>

                <div className="flex items-center justify-between ">
                    <div className="pl-5">{props.data}</div>
                    <div>
                        {localStorage.getItem("user") && <button
                            className="text-2xl flex items-center justify-center"
                            onClick={() => like(props.id,props.like,props.totalLike)}
                        >
                            <div className="absolute mr-1">
                                {props.totalLike}
                            </div>

                            <div
                                className={`w-[100px] h-[100px]  bg-like ${
                                    props.like ? "animate-likeAnim" : ""
                                }`}
                            ></div>
                        </button>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
