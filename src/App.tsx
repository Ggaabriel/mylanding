import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import BackStory from "./components/BackStory";
import Home from "./components/Home";
import useMediaQuery from "./hooks/useMediaQuery";
import { CharactersItems, SelectedPage } from "./shared/types";
import Advantages from "./components/Advantages";
import Comments from "./components/Comments";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/indes";

// bodyColor: "#FAE5D0",
// appaBackground: "#AEA093",
// aangPink: "#F17A76",
// woodColor: "#C57A6B",
// borderColor: "#CEB383",
// textColor: "#1A1918"

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    //хедер находится ли блок на самом верху
    const [isTopOfPage, setTopOfPage] = useState<boolean>(true);

    //больше ли оно 1200 пикселей
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

    //тут хранятся персонажи 
    const [characters, setCharacters] = useState<CharactersItems[]>([]);

    //идет ли загрузка
    const [isLoading, setIsLoading] = useState<boolean>(true);

    //выбор персонажа от 0-3 по айдишку в блоке персонажей в начале аанг то есть айди 0
    const [hero, setHero] = useState<number>(0);

    const [page,setPage] = useState<number>()

    useEffect(() => {
        setIsLoading(true);
        async function getHero() {
            const { data } = await axios.get(
                `http://localhost:8080/characters?id=${hero}`
            );
            setCharacters(data);
            setIsLoading(false);
        }
        getHero();
    }, [hero]);

    useEffect(() => {
        const scrollAction = () => {
            if (window.scrollY === 0) {
                setTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }

            if (window.scrollY !== 0) {
                setTopOfPage(false);
            }
        };
        window.addEventListener("scroll", scrollAction);
        return () => window.removeEventListener("scroll", scrollAction);
    }, []);
    return (
        <div className="App">
            <Header
                isAboveMediumScreens={isAboveMediumScreens}
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            <Characters
                hero={hero}
                setHero={setHero}
                isLoading={isLoading}
                characters={characters}
                setSelectedPage={setSelectedPage}
            />
            <BackStory setSelectedPage={setSelectedPage} />
            <Advantages
            // page={page}
                setSelectedPage={setSelectedPage}
                isAboveMediumScreens={isAboveMediumScreens}
            />
            <Comments 
            setSelectedPage={setSelectedPage}
            isAboveMediumScreens={isAboveMediumScreens}
            />
            <ContactUs setSelectedPage={setSelectedPage}/>
            <Footer />
        </div>
    );
}

export default App;
