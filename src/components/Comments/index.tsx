import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
    fetchComments,
    fetchTotalCount,
} from "../../redux/comments/asyncActions";
import { setComments, setPage} from "../../redux/comments/slice";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
import Comment from "./Comment";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreens: boolean;
    // page:Promise<number> | undefined;
};

const Comments = ({ setSelectedPage, isAboveMediumScreens }: Props) => {
    const dispatch = useAppDispatch();
    const totalCount = useAppSelector((state) => state.comments.totalCount);
    const limit = useAppSelector((state) => state.comments.limit);
    const page = useAppSelector((state) => state.comments.page);
    const comments = useAppSelector((state) => state.comments.comments);
    const totalPag = Math.ceil(totalCount / limit);
    const mass = []
    for(let i = 1; i <= totalPag; i++){
        mass.push(i)
    }

    const updatePage = (value:number) => {
        dispatch(setPage(value))
        dispatch(fetchComments({ page: value, limit: 4 }));  
    }
    useEffect(() => {
        dispatch(fetchComments({ page: 1, limit: 4 }));
        dispatch(fetchTotalCount());
    }, []);

    

    return (
        <section className=" overflow-hidden" id={`${SelectedPage.Comments}`}>
            <motion.div
                className="font-caveat max-w-[1400px] mx-auto min-h-[980px] flex flex-col items-center justify-center gap-32"
                onViewportEnter={() => setSelectedPage(SelectedPage.Comments)}
            >
                <div className="grid md:grid-cols-4 s:grid-cols-2 grid-cols-1 gap-8">
                    {comments.map((elem,i)=>{
                        return <Comment key={i} {...elem} />
                    })}
                </div>
                <div className="text-4xl gap-16 flex">
                    {mass.map((elem,i)=> {
                        return <button key={i} className={`${page === elem?"text-6xl":''}`} onClick={()=> updatePage(elem)}>
                            {elem}
                        </button> 
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Comments;
