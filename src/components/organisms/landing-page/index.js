import {React, useState, useEffect} from 'react';
import {Canvas, Image, LandingPageScreen} from './style';
// import image from '../../atoms/images/image10.jpg';
import {NavBar} from '../../molecules/navbar/index';
import {MobileNavbar} from '../../molecules/mobile_navbar/index';
import {Menu} from '../../molecules/mobile_menu/index';
// import {About} from '../../organisms/about/index';
// import {SignUp} from '../../organisms/sign-up/index';


export const LandingPage = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;

    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <LandingPageScreen>
            {width < breakpoint ? <MobileNavbar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}/> : <NavBar />}
            {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}  />}
            {/* <Canvas>
                <Image src={image} />
            </Canvas>
            <About/>
            <SignUp /> */}
        </LandingPageScreen>
    )
};
