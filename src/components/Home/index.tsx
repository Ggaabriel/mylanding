import React from 'react'
import useMediaQuery from '../../hooks/useMediaQuery';
import { SelectedPage } from '../../shared/types';
import aang from '../../assets/images/AangClip.png'


type Props = {
    setSelectedPage:(value:SelectedPage) => void;
    isAboveMediumScreens: boolean;
}

const Home = ({isAboveMediumScreens, setSelectedPage}: Props) => {
  return (
    <section
    id={SelectedPage.Home}
    className="gap-16 bg-bodyColor py-10 md:h-full md:pb-0"
    >
        {/* Картинка на фон и контент */}
        <div>
            
            {/* Контент */}
            <div>

            </div>
        </div>

    </section>
    
  )
}

export default Home