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
import Auth from "./components/Auth";

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

    const [user, setUser] = useState({
        id: 0,
        email: "",
        password: "",
    });

    const [wannaLogin, setWannaLogin] = useState(false);

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

    useEffect(()=>{
        const userString = localStorage.getItem("user");
        const user = userString ? JSON.parse(userString) : {
            id: 0,
            email: "",
            password: "",
        };
        setUser(user);
    },[])
    return (
        <div className="App">
            <Header
                isAboveMediumScreens={isAboveMediumScreens}
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                wannaLogin= {wannaLogin}
                setWannaLogin = {setWannaLogin}
                user={user}
                setUser={setUser}
            /> 
            <Home setSelectedPage={setSelectedPage} />
            {wannaLogin ? <Auth user={user} setUser={setUser} wannaLogin= {wannaLogin}
                setWannaLogin = {setWannaLogin}/> : ""}
            <Characters
                hero={hero}
                setHero={setHero}
                isLoading={isLoading}
                characters={characters}
                setSelectedPage={setSelectedPage}
            />
            <BackStory setSelectedPage={setSelectedPage} />
            <Advantages
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
