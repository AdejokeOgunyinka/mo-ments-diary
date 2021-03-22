import React from 'react';
import {Canvas, Image} from './style';
import image from '../../images/image10.jpg';
import {NavBar} from '../navbar/index'


export const LandingPage = ({children}) => {
    return (
        <>
            <NavBar />
            <Canvas>
                <Image src={image} />
            </Canvas>
        </>
    )
};
