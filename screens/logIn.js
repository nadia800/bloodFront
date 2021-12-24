import React, { useState, useLayoutEffect } from 'react';
import { StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    StyledTextInput, 
    StyledInputLabel, 
    LeftIcon, 
    RightIcon, 
    StyledButtom, 
    ButtomText, 
    MsgBox
} from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik'; //Build forms in react
import { ScrollView, View, ActivityIndicator } from 'react-native';
// icons
import {Octicons, Ionicons, Fontisto} from "@expo/vector-icons";
//colors
import { Colors } from '../components/styles';





const {brand, darkLight, primary} = Colors;

const LogIn = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);
    const[hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
   
    const handleLogIn = async (credentials, setSubmitting) => {
        try{
            const response = await fetch('http://192.168.1.3:3000/api/v1/user/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                login: credentials.username,
                pass: credentials.password
                })
            })
            if(response.status == 201){
                if(credentials.username == 'Admin'){
                    navigation.navigate('StockAdmin');
                }
                else if(credentials.username == 'Technicien'){
                    navigation.navigate('Stock');
                }
            }
            else if(response.status == 400){
                handleMessage("Mot de Pass incorret");
            }
        }
        catch(error) {
            console.error(error);
        };
    }
    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
    }
    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <ScrollView>
                    <PageLogo resizeMode="cover" source={require('./../assets/Blood-Donation-Background-PNG.png')} />
                    <PageTitle>Gestion de sang</PageTitle>
                    <SubTitle>Connexion</SubTitle>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        onSubmit={(values, { setSubmitting }) => {
                            if (values.username == '' || values.password == '') {
                                handleMessage('Veuillez remplir tous les champs');
                                setSubmitting(false);
                            } else {
                                handleLogIn(values, setSubmitting);
                                
                            }
                        }}
                    >{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Nom:"
                                icon="mail"
                                placeholder="Nom"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                keyboardType="email-address" />
                            <MyTextInput
                                label="Mot de passe:"
                                icon="lock"
                                placeholder="* * * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword} />
                            <MsgBox type={messageType}>{message}</MsgBox>
                            
                            {!isSubmitting && (
                                <StyledButtom onPress={handleSubmit}>
                                    <ButtomText>Connexion</ButtomText>
                                </StyledButtom>
                            )}
                            
                            {isSubmitting && (
                                <StyledButtom disabled={true}>
                                    <ActivityIndicator size="large" color={primary} />
                                </StyledButtom>
                            )}
                        </StyledFormArea>
                    )}
                    </Formik>
                </ScrollView>
            </InnerContainer>
        </StyledContainer>

      
    )
};
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name= {icon} size={30} color ={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'}size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
};



export default LogIn;