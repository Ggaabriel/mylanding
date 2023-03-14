import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Characters from "./components/Characters";
import Header from "./components/Header";
import Home from "./components/Home";
import useMediaQuery from "./hooks/useMediaQuery";
import { CharactersItems, SelectedPage } from "./shared/types";

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
    const [isTopOfPage, setTopOfPage] = useState<boolean>(true);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
    let [characters, setCharacters] = useState<CharactersItems[]>([]);
    let [whatIsHeroNow, setHero] = useState<number>(0);

    useEffect(() => {
        async function roar() {
            await axios
                .get(`https://64103dc3864814e5b64b86c9.mockapi.io/characters`)
                .then(({ data }: AxiosResponse<CharactersItems[]>) => {
                    setCharacters(characters = data);
                });
        };
        roar(); 
        console.log(characters)    
    }, []);

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
            <Home
                isAboveMediumScreens={isAboveMediumScreens}
                setSelectedPage={setSelectedPage}
            />
            <Characters
                characters={characters}
                setSelectedPage={setSelectedPage}
            />
        </div>
    );
}

export default App;
