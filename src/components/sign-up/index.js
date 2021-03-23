import {SignUpContainer, SignUpFormContainer, Picture, PictureContainer, TextBox, Button, SignUpHeader} from './style';
import image from '../../images/image5.jpg';


export const SignUp = ({children}) => {
    return(
        <SignUpContainer>
            <SignUpFormContainer>
                <h1 style={SignUpHeader}>Sign Up</h1>
                <TextBox placeholder='Username'/>
                <TextBox placeholder='Password'/>
                <TextBox placeholder='Confirm Password'/>
                <Button>Sign Up</Button>
            </SignUpFormContainer>
            <PictureContainer>
                <Picture src={image}/>
            </PictureContainer>
        </SignUpContainer>
    )
};
