import React from 'react';
import {Canvas, Image} from './style';
import image from '../../atoms/images/image10.jpg';
import {NavBar} from '../../molecules/navbar/index';
import {About} from '../about/index'
import {SignUp} from '../sign-up/index';


export const LandingPage = ({children}) => {
    return (
        <>
            <NavBar />
            <Canvas>
                <Image src={image} />
            </Canvas>
            <About/>
            <SignUp />
        </>
    )
};
