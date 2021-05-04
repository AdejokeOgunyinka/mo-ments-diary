import {NavContainer, LogoContainer, Logo, HamburgerContainer, Hamburger} from './style';
import logo from "../../atoms/images/cover2.png";

export const MobileNavbar = ({isMenuOpen, setMenuOpen, children}) => {
    
    const handleMenuOpenChange = () => {
        if(isMenuOpen===true){
            setMenuOpen(false);
        }
        else{
            setMenuOpen(true);
        }
    }

    return(
        <NavContainer>
            <LogoContainer>
                <Logo src={logo}/>
            </LogoContainer>
            <HamburgerContainer onClick={handleMenuOpenChange}>
                <Hamburger/>
            </HamburgerContainer>
        </NavContainer>
    )
}
