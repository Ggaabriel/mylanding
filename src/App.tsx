import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import useMediaQuery from './hooks/useMediaQuery';
import { SelectedPage } from './shared/types';


// bodyColor: "#FAE5D0",
// appaBackground: "#AEA093",
// aangPink: "#F17A76",
// woodColor: "#C57A6B",
// borderColor: "#CEB383",
// textColor: "#1A1918"


function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setTopOfPage] = useState<boolean>(true);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

    useEffect(()=>{
        const scrollAction = () => {
            if(window.scrollY === 0){
                setTopOfPage(true);
                setSelectedPage(SelectedPage.Home)
            }

            if(window.scrollY !== 0){
                setTopOfPage(false);
            }
        }
        window.addEventListener("scroll",scrollAction)
        return () => window.removeEventListener("scroll",scrollAction);
    },[])
  return (
    <div className="App">
        <Header isAboveMediumScreens={isAboveMediumScreens} isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
        <Home isAboveMediumScreens={isAboveMediumScreens} setSelectedPage={setSelectedPage}  />
    </div>
  );
}

export default App;
