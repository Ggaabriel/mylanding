import { motion } from "framer-motion";
import React, { useEffect } from "react";
import ActionButton from "../../shared/ActionButton";
import { SelectedPage } from "../../shared/types";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreens: boolean;
    // page:Promise<number> | undefined;
};

const Advantages = ({ setSelectedPage, isAboveMediumScreens,
    }: Props) => {
    return (
        <section
            className="my-20 bg-bodyColor"
            id={`${SelectedPage.Advantages}`}
        >
            <motion.div
                className=" font-caveat max-w-[1400px] mx-auto py-20 md:h-[980px] flex flex-col items-center justify-center gap-16"
                onViewportEnter={() => setSelectedPage(SelectedPage.Advantages)}
            >
                {isAboveMediumScreens ? (
                    <div className="bg-caveBg w-full h-full bg-contain bg-no-repeat bg-center grid md:grid-cols-3 items-center place-items-center">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-effects w-40 h-40 bg-cover text-center"></div>
                            <h3 className="md:text-6xl text-4xl font-bold">
                                Эффекты
                            </h3>
                            <p className="md:text-4xl text-3xl">
                                Лучшие визуальные эффекты благодаря большому
                                бюджету
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-16">
                            <div className="flex items-center flex-col text-center">
                                <div className="bg-experience w-56 h-40 bg-cover bg-center"></div>
                                <h3 className="md:text-6xl text-4xl font-bold">
                                    Опыт
                                </h3>
                                <p className="md:text-4xl text-3xl">
                                    Успешный опыт уже вышедшего мультсериала{" "}
                                </p>
                            </div>

                            <ActionButton chidren={"Смотреть трейлер"} />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-quality w-40 h-40 bg-cover"></div>
                            <h3 className="md:text-6xl text-4xl font-bold">
                                Качество
                            </h3>
                            <p className="md:text-4xl text-3xl">
                                Высокое качество сценария и актерской игры
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-appaBackground w-5/6 rounded-xl h-full bg-contain bg-no-repeat bg-center grid md:grid-cols-3 items-center place-items-center gap-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-effects w-40 h-40 bg-cover text-center"></div>
                            <h3 className="md:text-6xl text-4xl font-bold">
                                Эффекты
                            </h3>
                            <p className="md:text-4xl text-3xl">
                                Лучшие визуальные эффекты благодаря большому
                                бюджету
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-16">
                            <div className="flex items-center flex-col text-center">
                                <div className="bg-experience w-56 h-40 bg-cover bg-center"></div>
                                <h3 className="md:text-6xl text-4xl font-bold">
                                    Опыт
                                </h3>
                                <p className="md:text-4xl text-3xl">
                                    Успешный опыт уже вышедшего мультсериала{" "}
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-quality w-40 h-40 bg-cover"></div>
                            <h3 className="md:text-6xl text-4xl font-bold">
                                Качество
                            </h3>
                            <p className="md:text-4xl text-3xl">
                                Высокое качество сценария и актерской игры
                            </p>
                        </div>
                        
                        <ActionButton chidren={"Смотреть трейлер"} />
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Advantages;
