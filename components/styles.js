import styled from "styled-components/native";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";

//provides system information that remains constant throughout the lifetime of your app's install.
import Constants from "expo-constants"; 

const StatusBarHeight = Constants.statusBarHeight; //The default status bar height for the device.

//color
export const Colors = {
    primary : '#ffffff', //White color
    secondary: '#E5E7EB', //White-gris
    tertiary: '#1F2937', //Dark
    darkLight: '#9CA3AF', //Gris
    brand: '#FA8072', //Rouge
    green: '#10B981',
    red: '#EF4444',
};

const {primary, secondary, tertiary, darkLight, brand, green,red} = Colors;

export const StyledContainer = styled.View`
    flex: 1;  
    padding-top: ${StatusBarHeight + 30}px;
    background-color: #000;
`
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelconeContainer = styled(InnerContainer)`
    padding: 10px;
    padding-top: 10px;
    justify-content: center;
`;
export const PageLogo = styled.Image`
    width: 300px;
    height: 200px;
    margin-left: 10px;
    
`;
export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

`;

export const SubTitle = styled.Text`
    font-size: 10px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${primary};
    text-align: center;
`;

export const StyledFormArea = styled.View`
    width: 90%;
    margin-left: 20px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${primary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButtom = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    align-items: center;
    marginTop: 20px;
`;

export const ButtomText = styled.Text`
    color: ${primary};
    font-size: 16px;
    ${(props) => props.google == true && `
        padding: 25px;
`}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? green: red};
`; 

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px
`;