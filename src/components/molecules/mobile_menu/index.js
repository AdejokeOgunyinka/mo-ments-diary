import {MenuContainer, CloseMenuContainer, CloseMenuIcon, MenuTextContainer, Logo, MenuButton} from './style';
import logo from "../../atoms/images/cover2.png";


export const Menu = ({isMenuOpen, setMenuOpen, children}) => {

    const handleMenuOpenChange = () => {
        if(isMenuOpen===true){
            setMenuOpen(false);
        }
        else{
            setMenuOpen(true);
        }
    }

    return(
        <MenuContainer>
            <CloseMenuContainer onClick={handleMenuOpenChange}>
                <CloseMenuIcon/>
            </CloseMenuContainer>
            <MenuTextContainer>
                <Logo src={logo}/>
                <MenuButton>Home</MenuButton>
                <MenuButton>About Us</MenuButton>
                <MenuButton>Sign In</MenuButton>
                <MenuButton>Sign Up</MenuButton>
            </MenuTextContainer>
        </MenuContainer>
    )
}
